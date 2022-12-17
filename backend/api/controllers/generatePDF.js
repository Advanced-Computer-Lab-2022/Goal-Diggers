module.exports.pdfTemplate = (title, notes) => {
    let body = `<h2>Notes of ${title} Course : </h2> <hr />`;
    for (let index = 0; index < notes.length; index++) {
        body += `<span class='my-3'>${index + 1} - On Video : ${notes[index].title}.</span> <br />
                <span class='mb-3'style="font weight:bolder; color :red;">- ${notes[index].note}</span>  <hr />` ;
    };
    return ( `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
       </head>
       <body>
         ${body}
       </body>
    </html>
    `);
};

module.exports.certificateTemplate = (title, username, instructor) => {
    return ( `
    <html>
    <head>
        <style type='text/css'>
            body, html {
                margin: 0;
                padding: 0;
            }
            body {
                color: black;
                display: table;
                font-family: Georgia, serif;
                font-size: 24px;
                text-align: center;
            }
            .container {
                border: 20px solid rgb(224, 91, 73);
                width: 750px;
                height: 563px;
                display: table-cell;
                vertical-align: middle;
            }
            .logo {
                color: rgb(224, 91, 73);
            }

            .marquee {
                color: rgb(224, 91, 73);
                font-size: 48px;
                margin: 20px;
            }
            .assignment {
                margin: 20px;
            }
            .person {
                border-bottom: 2px solid black;
                font-size: 32px;
                font-style: italic;
                margin: 20px auto;
                width: 400px;
            }
            .reason {
                margin: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                An Organization
            </div>

            <div class="marquee">
                Certificate of Completion
            </div>

            <div class="assignment">
                This certificate is presented to
            </div>

            <div class="person">
                ${username}
            </div>

            <div class="reason">
                for completing ${title} Course <br/>
                given by instructor : ${instructor} 
            </div>
        </div>
    </body>
</html>
    `);
};