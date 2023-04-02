import React from 'react'

export default function Main(props){
  return (
    <>
      <html lang="en" data-theme="night">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>clearheaded.</title>
          <link href="../css/output.css" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
          <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png"/>
          <link rel="manifest" href="../favicon/site.webmanifest"/>
        </head>
        <body>
          {props.children}
          <script src="../js/main.js"></script>
          <script src="../js/drag.js"></script>
        </body>
      </html>
    </>
  )
}