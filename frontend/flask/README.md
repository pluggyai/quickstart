# Pluggy Connect - Flask Example

Minimal Python Flask application that serves an HTML page with the Pluggy Connect widget.

## Prerequisites

- Python 3.7+
- Flask (`pip install flask`)

## Setup

1. Replace the token endpoint URL in `templates/index.html` with your own backend API
   - You can deploy one using the [Vercel Connect Token example](../../examples/vercel-node-connect-token)

2. Run the Flask server:

```bash
pip install flask
python app.py
```

3. Open `http://localhost:5000` in your browser

## Resources

- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
- [Flask Documentation](https://flask.palletsprojects.com/)
