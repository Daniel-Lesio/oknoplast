import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
const nodemailer = require("nodemailer");
import fs from 'fs' 
import path from 'path'
const handler = nc<NextApiRequest, NextApiResponse>()
    handler.get(async (req:NextApiRequest,res:NextApiResponse)=>{
        
        // fs.readFile(path.join(filepath),'utf8',(err,d)=>{
            //     if(err){
                //         console.log(err)
                //     }
                //     else{
                    //         console.log(d)
                    //     }
                    // })
                    
                    async function main() {
                        const filepath = path.join(process.cwd(),'public/output.html') 
            
            const file= fs.readFileSync(filepath,'utf8')
            let transporter = nodemailer.createTransport({
                host: 'smtp.googlemail.com', // Gmail Host
                port: 465, // Port
                secure: true, // this is true as port is 465
                auth: {
                    user: 'eldan8600@gmail.com', // generated ethereal user
                    pass: 'Eurodolar6,66', // generated ethereal password
                },
            });
         
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"FROM_NAME" <FROM_EMAIL_ADDRESS>', // sender address
                to: "lesiewiczsales@gmail.com", // list of receivers
                subject: "Welcome Email", // Subject line
                //text: "Hello world?", // plain text body
                html: file, // html body
            });
         
            console.log("Message sent: %s", info.messageId);
        }
         
        main().catch(console.error);




        res.send("Hello Worlds")
    })

    export default handler;
