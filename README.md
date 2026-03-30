# Dream IT Website

This site is configured for deployment on Azure Static Web Apps as a static
Next.js export.

## Deployment flow

- The app builds with `next build`.
- `output: "export"` writes the static site to `out/`.
- Azure Static Web Apps deploys the exported `out` folder from
  [main.yml](./.github/workflows/main.yml).
- Scheduled hourly redeploys run from
  [incremental-updates.yml](./.github/workflows/incremental-updates.yml).

## Required GitHub secret

- `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Notes

- Firebase hosting files were removed because they are no longer required.
- Contact and career submissions already use external APIs, so no Firebase
  runtime services are needed for the site to work on Azure Static Web Apps.
- Optional client override:
  `NEXT_PUBLIC_CAREER_RESUME_UPLOAD_ENDPOINT`
