# Pluggy Connect Quickstart - Next.js

A production-ready Next.js application for integrating Pluggy's financial data API with Supabase. This quickstart provides a complete foundation for building financial applications with automatic data synchronization via webhooks.

## What This Application Does

- **Pluggy Connect Integration**: Easily connect to financial institutions using Pluggy's Connect Widget
- **Automatic Data Sync**: Receives and processes webhook events from Pluggy to keep your database up-to-date
- **Complete Data Models**: Stores accounts, transactions, investments, credit cards, loans, and identity data
- **RESTful API**: Pre-built endpoints for accessing financial data
- **Production Ready**: Configured for Vercel deployment with proper error handling and logging

## Prerequisites

Before deploying, you'll need accounts on both platforms:

1. **Pluggy Account** - Sign up at [dashboard.pluggy.ai](https://dashboard.pluggy.ai)
2. **Supabase Account** - Sign up at [supabase.com](https://supabase.com)

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-quickdeploy-nextjs&env=PLUGGY_CLIENT_ID,PLUGGY_CLIENT_SECRET,NEXT_PUBLIC_SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY&envDescription=Get%20your%20Pluggy%20credentials%20from%20dashboard.pluggy.ai%20and%20Supabase%20credentials%20from%20your%20Supabase%20project%20settings&envLink=https://dashboard.pluggy.ai)

## Step-by-Step Setup Guide

### Step 1: Get Your Pluggy Credentials

1. Go to [Pluggy Dashboard](https://dashboard.pluggy.ai)
2. Navigate to **Aplicações** in the sidebar
3. Click the **Nova** button to create a new application
4. Fill in your application details and save
5. Once created, you'll see a card for your new application containing:
   - **Client ID** - Copy this value
   - **Client Secret** - Copy this value (click to reveal)

Keep these credentials handy - you'll need them for the Vercel deployment.

### Step 2: Set Up Supabase Database

#### 2.1 Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in your project details:
   - Choose a project name
   - Set a strong database password (save this!)
   - Select a region close to your users
4. Click **Create new project** and wait for it to initialize (~2 minutes)

#### 2.2 Get Your Supabase Credentials

1. In your Supabase project dashboard, click on **Settings** (gear icon) in the sidebar
2. Navigate to **API** section
3. Copy the following values:
   - **Project URL** (under "Project URL") → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role secret** (under "Project API keys") → This is your `SUPABASE_SERVICE_ROLE_KEY`
     - ⚠️ Keep this secret safe! Never expose it in client-side code

#### 2.3 Create Database Tables

Now you need to manually create the database schema:

1. In your Supabase project, navigate to **SQL Editor** in the sidebar
2. Click **New query**
3. Copy and paste the complete schema below
4. Click **Run** or press `Ctrl/Cmd + Enter`

**Complete Database Schema:**

```sql
-- Initial schema for Pluggy integration

-- Create pluggy_items table (referenced by other tables)
CREATE TABLE IF NOT EXISTS public.pluggy_items (
  item_id uuid NOT NULL,
  user_id text,
  connector_id text,
  connector_name text,
  connector_image_url text,
  status text CHECK (status = ANY (ARRAY['UPDATED'::text, 'UPDATING'::text, 'WAITING_USER_INPUT'::text, 'LOGIN_ERROR'::text, 'OUTDATED'::text, 'CREATED'::text])),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  last_updated_at timestamp with time zone,
  webhook_url text,
  parameters jsonb,
  institution_name text,
  institution_url text,
  primary_color text,
  secondary_color text,
  CONSTRAINT pluggy_items_pkey PRIMARY KEY (item_id)
);

-- Create accounts table
CREATE TABLE IF NOT EXISTS public.accounts (
  account_id text NOT NULL,
  item_id uuid,
  type text NOT NULL CHECK (type = ANY (ARRAY['BANK'::text, 'CREDIT'::text, 'PAYMENT_ACCOUNT'::text])),
  subtype text,
  number text,
  name text NOT NULL,
  marketing_name text,
  balance numeric,
  currency_code text DEFAULT 'BRL'::text,
  owner text,
  tax_number text,
  bank_data jsonb,
  credit_data jsonb,
  disaggregated_credit_limits jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT accounts_pkey PRIMARY KEY (account_id),
  CONSTRAINT accounts_item_id_fkey 
    FOREIGN KEY (item_id) 
    REFERENCES public.pluggy_items(item_id) 
    ON DELETE CASCADE
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS public.transactions (
  transaction_id text NOT NULL,
  account_id text,
  date timestamp with time zone NOT NULL,
  description text NOT NULL,
  description_raw text,
  amount numeric NOT NULL,
  amount_in_account_currency numeric,
  balance numeric,
  currency_code text DEFAULT 'BRL'::text,
  category text,
  category_id text,
  provider_code text,
  provider_id text,
  status text DEFAULT 'POSTED'::text CHECK (status = ANY (ARRAY['POSTED'::text, 'PENDING'::text])),
  type text NOT NULL CHECK (type = ANY (ARRAY['CREDIT'::text, 'DEBIT'::text])),
  operation_type text,
  operation_category text,
  payment_data jsonb,
  credit_card_metadata jsonb,
  merchant jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id),
  CONSTRAINT transactions_account_id_fkey 
    FOREIGN KEY (account_id) 
    REFERENCES public.accounts(account_id) 
    ON DELETE CASCADE
);

-- Create credit_card_bills table
CREATE TABLE IF NOT EXISTS public.credit_card_bills (
  bill_id text NOT NULL,
  account_id text,
  due_date timestamp with time zone NOT NULL,
  total_amount numeric NOT NULL,
  total_amount_currency_code text DEFAULT 'BRL'::text,
  minimum_payment_amount numeric,
  allows_installments boolean DEFAULT false,
  finance_charges jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT credit_card_bills_pkey PRIMARY KEY (bill_id),
  CONSTRAINT credit_card_bills_account_id_fkey 
    FOREIGN KEY (account_id) 
    REFERENCES public.accounts(account_id) 
    ON DELETE CASCADE
);

-- Create identities table
CREATE TABLE IF NOT EXISTS public.identities (
  identity_id text NOT NULL,
  item_id uuid,
  full_name text,
  company_name text,
  document text,
  document_type text,
  tax_number text,
  job_title text,
  birth_date timestamp with time zone,
  investor_profile text,
  establishment_code text,
  establishment_name text,
  addresses jsonb,
  phone_numbers jsonb,
  emails jsonb,
  relations jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT identities_pkey PRIMARY KEY (identity_id),
  CONSTRAINT identities_item_id_fkey 
    FOREIGN KEY (item_id) 
    REFERENCES public.pluggy_items(item_id) 
    ON DELETE CASCADE
);

-- Create investments table
CREATE TABLE IF NOT EXISTS public.investments (
  investment_id text NOT NULL,
  item_id uuid,
  name text NOT NULL,
  code text,
  isin text,
  number text,
  owner text,
  currency_code text DEFAULT 'BRL'::text,
  type text CHECK (type = ANY (ARRAY['FIXED_INCOME'::text, 'SECURITY'::text, 'MUTUAL_FUND'::text, 'EQUITY'::text, 'ETF'::text, 'COE'::text])),
  subtype text,
  last_month_rate numeric,
  last_twelve_months_rate numeric,
  annual_rate numeric,
  date timestamp with time zone,
  value numeric,
  quantity numeric,
  amount numeric NOT NULL,
  balance numeric NOT NULL,
  taxes numeric,
  taxes2 numeric,
  due_date timestamp with time zone,
  rate numeric,
  rate_type text CHECK (rate_type = ANY (ARRAY['CDI'::text, 'IPCA'::text, 'PRE_FIXADO'::text, 'SELIC'::text])),
  fixed_annual_rate numeric,
  issuer text,
  issue_date timestamp with time zone,
  amount_profit numeric,
  amount_withdrawal numeric,
  amount_original numeric,
  status text DEFAULT 'ACTIVE'::text CHECK (status = ANY (ARRAY['ACTIVE'::text, 'PENDING'::text, 'TOTAL_WITHDRAWAL'::text])),
  institution jsonb,
  metadata jsonb,
  provider_id text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT investments_pkey PRIMARY KEY (investment_id),
  CONSTRAINT investments_item_id_fkey 
    FOREIGN KEY (item_id) 
    REFERENCES public.pluggy_items(item_id) 
    ON DELETE CASCADE
);

-- Create investment_transactions table
CREATE TABLE IF NOT EXISTS public.investment_transactions (
  transaction_id text NOT NULL,
  investment_id text,
  trade_date timestamp with time zone NOT NULL,
  date timestamp with time zone NOT NULL,
  description text,
  quantity numeric,
  value numeric,
  amount numeric NOT NULL,
  net_amount numeric,
  type text NOT NULL CHECK (type = ANY (ARRAY['BUY'::text, 'SELL'::text, 'DIVIDEND'::text, 'SPLIT'::text, 'BONUS'::text])),
  brokerage_number text,
  expenses jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT investment_transactions_pkey PRIMARY KEY (transaction_id),
  CONSTRAINT investment_transactions_investment_id_fkey 
    FOREIGN KEY (investment_id) 
    REFERENCES public.investments(investment_id) 
    ON DELETE CASCADE
);

-- Create loans table
CREATE TABLE IF NOT EXISTS public.loans (
  loan_id text NOT NULL,
  item_id uuid,
  contract_number text,
  ipoc_code text,
  product_name text NOT NULL,
  provider_id text,
  type text,
  date timestamp with time zone,
  contract_date timestamp with time zone,
  disbursement_dates jsonb,
  settlement_date timestamp with time zone,
  due_date timestamp with time zone,
  first_installment_due_date timestamp with time zone,
  contract_amount numeric,
  currency_code text DEFAULT 'BRL'::text,
  cet numeric,
  installment_periodicity text,
  installment_periodicity_additional_info text,
  amortization_scheduled text,
  amortization_scheduled_additional_info text,
  cnpj_consignee text,
  interest_rates jsonb,
  contracted_fees jsonb,
  contracted_finance_charges jsonb,
  warranties jsonb,
  installments jsonb,
  payments jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT loans_pkey PRIMARY KEY (loan_id),
  CONSTRAINT loans_item_id_fkey 
    FOREIGN KEY (item_id) 
    REFERENCES public.pluggy_items(item_id) 
    ON DELETE CASCADE
);

-- Enable Row Level Security on all tables
ALTER TABLE public.pluggy_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_card_bills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.identities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investment_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_accounts_item_id ON public.accounts(item_id);
CREATE INDEX idx_identities_item_id ON public.identities(item_id);
CREATE INDEX idx_investments_item_id ON public.investments(item_id);
CREATE INDEX idx_loans_item_id ON public.loans(item_id);
CREATE INDEX idx_transactions_account_id ON public.transactions(account_id);
CREATE INDEX idx_credit_card_bills_account_id ON public.credit_card_bills(account_id);
CREATE INDEX idx_investment_transactions_investment_id ON public.investment_transactions(investment_id);
CREATE INDEX idx_pluggy_items_user_id ON public.pluggy_items(user_id);
```

✅ You should see "Success. No rows returned" if everything executed correctly.

### Step 3: Deploy to Vercel

Now that you have all four credentials, click the "Deploy with Vercel" button above and enter:

1. **PLUGGY_CLIENT_ID** - From Step 1
2. **PLUGGY_CLIENT_SECRET** - From Step 1
3. **NEXT_PUBLIC_SUPABASE_URL** - From Step 2.2
4. **SUPABASE_SERVICE_ROLE_KEY** - From Step 2.2

Click **Deploy** and wait for Vercel to build your application (~2-3 minutes).

Once deployed, copy your Vercel application URL (e.g., `https://your-app.vercel.app`).

### Step 4: Configure Pluggy Webhooks

To receive real-time updates when financial data changes, you need to configure webhooks:

1. Go back to [Pluggy Dashboard](https://dashboard.pluggy.ai)
2. Navigate to **Aplicações**
3. Find your application card and click the **Editar** button
4. Scroll down to the **Webhooks** section
5. Click **+ Novo webhook**
6. Configure your webhook:
   - **URL**: Enter your Vercel URL + `/api/webhook`
     - Example: `https://your-app.vercel.app/api/webhook`
   - **Events**: Select **Todos os eventos** (All events) - Recommended
     - Or select specific events: `transactions/created`, `transactions/updated`, `item/created`, etc.

✅ Your application is now fully configured and will automatically sync financial data to your Supabase database!

## Testing Your Setup

1. Visit your deployed Vercel application
2. The Connect Widget should load automatically
3. Try connecting to a financial institution (use Sandbox mode for testing)
4. Check your Supabase database - you should see data appearing in the tables
5. Monitor the Vercel function logs to see webhook events being processed

## What's Next?

You now have a fully functional financial data integration! You can:

- **Customize the UI**: Edit the frontend to match your brand
- **Add Authentication**: Implement user authentication to isolate data per user
- **Build Features**: Create dashboards, analytics, or financial management tools
- **Extend the API**: Add custom endpoints for your specific needs
- **Contribute**: Share improvements back to this repository


## Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── webhook/      # Pluggy webhook handler
│   │   ├── token/        # Connect token generation
│   │   └── ...           # Other endpoints
│   ├── lib/
│   │   ├── pluggy/       # Pluggy SDK client
│   │   ├── supabase/     # Supabase client
│   │   └── services/     # Business logic
│   └── types/            # TypeScript definitions
```

## Need Help?

- **Pluggy Documentation**: [docs.pluggy.ai](https://docs.pluggy.ai)
- **Supabase Documentation**: [supabase.com/docs](https://supabase.com/docs)
- **Issues**: Open an issue in this repository

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation
