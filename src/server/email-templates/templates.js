exports.generateContactEmail = message => {

    let {userEmail,subject,text} = message;
    return {
        to: '2020appliedmovement@gmail.com',
        from: '2020appliedmovement@gmail.com',
        subject,
        html: `
        
        <div> 
        There email is user email
        ${userEmail}
        ${text}
        </div>
        `
    }
}