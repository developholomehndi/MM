# MehndiKar — Book Your Mehndi Artists

Developer-ready static website package.

## Files
- `mehndikar.html` — main website
- `assets/mehndikar-leaf-logo.svg` — selected leaf logo (option 6 from the approved logo board)
- `assets/gallery-01.jpg` through `gallery-11.jpg` — gallery images

## Form submission
The booking form is connected to FormSubmit using the AJAX endpoint for `bridalmehndi7@gmail.com`.

The email address is not displayed anywhere in the website UI.

### First activation
FormSubmit requires the receiving email to be confirmed the first time the form is submitted. Submit one real test booking and check `bridalmehndi7@gmail.com` for the FormSubmit activation email. After activation, future booking submissions are forwarded to that mailbox.

## Local test
Do not open the HTML as a `file://` page for FormSubmit testing. Serve the folder with a local web server:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000/mehndikar.html`

## Deployment
Upload `mehndikar.html` and the `assets` folder to the website root on the hosting account. The site is plain HTML/CSS/JavaScript and can be further developed by another developer.

## Business details
- Website: www.mehndikar.com
- Phone: 9353686183
- Location: Bengaluru

## Current offerings
1. Simple Mehndi — ₹1,399
2. Non-bridal Mehndi — ₹1,599
3. Floral Mehndi — ₹1,799
4. Baby shower or engagement mehndi designs — ₹1,999
5. Bridal Mehndi — ₹2,199
6. Heavy Mehndi designs — ₹2,699
7. Premium Artist Booking — contact 9353686183
8. Fresh Mehndi Cones
9. Nail Cones
10. Fresh Bridal Cones
11. Aftercare Kit
