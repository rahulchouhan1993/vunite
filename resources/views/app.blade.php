<html>
    <head>
        <meta charset="utf-8" />
        <meta name="Googlebot-News" content="noindex, nofollow">
        <meta name="googlebot" content="index, follow">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <title>Vunitesupportservices – Supporting You to Live More Independently</title>
        <meta name="description" content="Registered NDIS Provider offering personalised disability support services across South Australia.">
        <meta name="author" content="Vunitesupportservices">
        <meta property="og:title" content="Vunitesupportservices – Supporting You to Live More Independently">
        <meta property="og:description" content="Registered NDIS Provider offering personalised disability support services across South Australia.">
        <meta property="og:image" content="{{ Vite::asset('resources/js/assets/siteicon.png') }}">
        <meta property="og:url" content="https://vunitesupportservices.com.au">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Vunitesupportservices – Supporting You to Live More Independently">
        <meta name="twitter:description" content="Registered NDIS Provider offering personalised disability support services across South Australia.">
        <meta name="twitter:image" content="{{ Vite::asset('resources/js/assets/siteicon.png') }}">


        <link rel="icon" type="image/png" href="{{ Vite::asset('resources/js/assets/siteicon.png') }}" />
        <link rel="apple-touch-icon" href="{{ Vite::asset('resources/js/assets/siteicon.png') }}" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet">
         @vite('resources/css/app.css')
        @viteReactRefresh
        @routes
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body>
        @inertia
        
    </body>
</html>
