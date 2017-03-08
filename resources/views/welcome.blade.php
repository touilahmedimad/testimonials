<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://bootswatch.com/flatly/bootstrap.css">
        <link rel="stylesheet" href="{{ asset('css/bulma.css')}}">
        <link rel="stylesheet" href="https:/maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">

        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </head>
    <body>
        <div id="app">
        </div>
       <script src="js/app.js"></script>
    </body>
</html>
