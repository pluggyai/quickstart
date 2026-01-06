import { IdentityResponse } from "pluggy-sdk";
import { IdentityRecord } from "../../../types/pluggy";

export function mapIdentityFromPluggyToDb(identity: IdentityResponse): Omit<IdentityRecord, 'id'> {
  return {
    item_id: identity.itemId,
    identity_id: identity.id,
    full_name: identity.fullName ?? undefined,
    company_name: identity.companyName ?? undefined,
    document: identity.document ?? undefined,
    document_type: identity.documentType ?? undefined,
    tax_number: identity.taxNumber ?? undefined,
    job_title: identity.jobTitle ?? undefined,
    birth_date: identity.birthDate ? (identity.birthDate instanceof Date ? identity.birthDate.toISOString() : new Date(identity.birthDate).toISOString()) : undefined,
    addresses: identity.addresses
      ? identity.addresses.map((addr) => ({
          full_address: addr.fullAddress ?? undefined,
          primary_address: addr.primaryAddress ?? undefined,
          city: addr.city ?? undefined,
          postal_code: addr.postalCode ?? undefined,
          state: addr.state ?? undefined,
          country: addr.country ?? undefined,
          type: addr.type ?? undefined,
          additional_info: addr.additionalInfo ?? undefined,
          ...(addr as Record<string, unknown>),
        }))
      : undefined,
    phone_numbers: identity.phoneNumbers
      ? identity.phoneNumbers.map((phone) => ({
          type: phone.type ?? undefined,
          value: phone.value,
          ...(phone as Record<string, unknown>),
        }))
      : undefined,
    emails: identity.emails
      ? identity.emails.map((email) => ({
          type: email.type ?? undefined,
          value: email.value,
          ...(email as Record<string, unknown>),
        }))
      : undefined,
    relations: identity.relations
      ? identity.relations.map((rel) => ({
          type: rel.type ?? undefined,
          name: rel.name ?? undefined,
          document: rel.document ?? undefined,
          ...(rel as Record<string, unknown>),
        }))
      : undefined,
  };
}

