import nodemailer from 'nodemailer';
export const sendMail = (email, content) => {
    return (dispatch, getState) => {
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'trungmoderncoding',
              pass: 'trung12011999',
            },
          });
        
          const APP_NAME = 'PNV';

          const mailOptions = {
            from: `${APP_NAME} <noreply@firebase.com>`,
            to: 'trungmoderncoding@gmail.com',
          };
        
          // The user subscribed to the newsletter.
          mailOptions.subject = `Welcome to ${APP_NAME}!`;
        //   mailOptions.text = `Hey you ! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
          mailOptions.text = content;
          mailTransport.sendMail(mailOptions).then(() => {
            console.log('New welcome email sent to: ', email);
            dispatch({ type: "SEND_SUCCESS" });
          }).catch(err => {
            dispatch({ type: "SEND_ERROR", err });
          })
    }
}