module.exports = (title, notes) => {
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