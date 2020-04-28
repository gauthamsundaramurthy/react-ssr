export default function template (title, initialState ={}, content="") {
    let scripts = ""
    if (content) {
         scripts = `
            <script> window.__STATE__ = ${JSON.stringify(initialState)} </script>
            <script src="assets/client.js"> </script>
            `   
    } else {
        scripts = `<script src="assets/bundle.js"> </script>`
    }

    let template = 
    `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
            </head>
            <body>
                <div classs="content">
                    <div id="app" class="wrap-inner">
                        ${content}
                    </div>
                </div>
                ${scripts}
            </body>
        </html>
    `
    return template;
}
