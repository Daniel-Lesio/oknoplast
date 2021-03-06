import Nav from '../components/nav'
import Overlay from '../components/Overlay'
import React,{useState} from 'react'

const dashboard = () => {
    const [mode,setMode] = useState("large") 
    return (
        <div>
            <Overlay/>
            <Nav/>
            <div 
            className="presentation  shadow-sm container my-24 mx-auto bg-white" 
            style={{ minHeight : '300px' , width :  mode === "large" ? '600px' :"300px"  }}
            dangerouslySetInnerHTML={{
                __html : htmlString
            }}
            >

            </div>
            <div className="icons rounded shadow-lg">
            <svg  onClick={()=>setMode('small')} className={ mode === 'small' ? "active" : '' }   height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>
            <svg onClick={()=>setMode('large')} className={ mode === 'large' ? "active" : '' }  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/></svg>
            </div>
        </div>
    );
}

const htmlString = `

<head>
  <title>
  </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }

      .mj-column-per-33-333333333333336 {
        width: 33.333333333333336% !important;
        max-width: 33.333333333333336%;
      }

      .mj-column-per-20 {
        width: 20% !important;
        max-width: 20%;
      }

      .mj-column-per-80 {
        width: 80% !important;
        max-width: 80%;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="background-color:white;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> OKNOPLAST </div>
  <div style="background-color:white;">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-bottom:0.5px solid #848484;vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
                      <!--[if mso | IE]>
    
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="44px" style="vertical-align:top;height:44px;">
        
    <![endif]-->
                      <div style="font-family:Arial;font-size:12px;line-height:24px;text-align:center;color:#848484;height:44px;">Pobierz Vademecum okien OKNOPLAST!</div>
                      <!--[if mso | IE]>
    
          </td></tr></table>
        
    <![endif]-->
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" class="up" style="transform: translateY(-5px); font-size: 0px; padding: 10px 25px; padding-bottom: 10px; word-break: break-word; margin-bottom: 100px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:180px;">
                              <img alt height="25" src="https://oknoplast.vercel.app/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:25px;width:100%;font-size:13px;" width="180">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                <!--[if mso | IE]>
        <table
           border="0" cellpadding="0" cellspacing="0" role="presentation"
        >
          <tr>
        
              <td
                 style="vertical-align:top;width:100px;"
              >
              <![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-right:solid #ddd 1px;vertical-align:top;" width="100%">
                    <tr>
                      <td align="center" class="no-wrap-text" style="white-space: nowrap; font-size: 0px; padding: 10px 25px; word-break: break-word;">
                        <div style="font-family:Arial;font-size:13px;line-height:1;text-align:center;color:#000000;">OKNA</div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
              </td>
              
              <td
                 style="vertical-align:top;width:100px;"
              >
              <![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-right:solid #ddd 1px;vertical-align:top;" width="100%">
                    <tr>
                      <td align="center" class="no-wrap-text" style="white-space: nowrap; font-size: 0px; padding: 10px 25px; word-break: break-word;">
                        <div style="font-family:Arial;font-size:13px;line-height:1;text-align:center;color:#000000;">DRZWI</div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
              </td>
              
              <td
                 style="vertical-align:top;width:100px;"
              >
              <![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tr>
                      <td align="center" class="no-wrap-text" style="white-space: nowrap; font-size: 0px; padding: 10px 25px; word-break: break-word;">
                        <div style="font-family:Arial;font-size:13px;line-height:1;text-align:center;color:#000000;">ROLETY</div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
              </td>
              
          </tr>
          </table>
        <![endif]-->
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"
        >
          <tr>
            <td  style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
              <v:image
                 style="border:0;height:469px;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" src="https://oknoplast.vercel.app/hero.png" xmlns:v="urn:schemas-microsoft-com:vml"
              />
      <![endif]-->
    <div class="align" style="margin:0 auto;max-width:600px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tr style="vertical-align:top;">
          <td background="https://oknoplast.vercel.app/hero.png" style="background:#2a3448 url(https://oknoplast.vercel.app/hero.png) no-repeat right right / cover;background-position:right right;background-repeat:no-repeat;padding:0px;vertical-align:top;" height="280">
            <!--[if mso | IE]>
        <table
           border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
        >
          <tr>
            <td  style="">
      <![endif]-->
            <div class="mj-hero-content" style="margin:0px auto;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;">
                <tr>
                  <td style>
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;">
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="40" style="height:40px;">
      
    <![endif]-->
                          <div style="height:40px;"> &nbsp; </div>
                          <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" class="align" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Helvetica;font-size:35px;font-weight:900;line-height:45px;text-align:left;color:#000000;">Vademecum <br> okien <br> OKNOPLAST!</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="height:10px;">
      
    <![endif]-->
                          <div style="height:10px;"> &nbsp; </div>
                          <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" class="align" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:180px;line-height:100%;">
                            <tr>
                              <td align="center" bgcolor="#00B1EB" role="presentation" style="border:none;border-radius:3px;cursor:auto;height:48px;mso-padding-alt:10px 25px;background:#00B1EB;" valign="middle">
                                <a href="https://mjml.io/" style="display:inline-block;width:130px;background:#00B1EB;color:#ffffff;font-family:Arial;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> Pobierz </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="50" style="height:50px;">
      
    <![endif]-->
                          <div style="height:50px;"> &nbsp; </div>
                          <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
            <!--[if mso | IE]>
            </td>
          </tr>
        </table>
      <![endif]-->
          </td>
        </tr>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
    
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"
        >
          <tr>
            <td  style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
              <v:image
                 style="border:0;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" xmlns:v="urn:schemas-microsoft-com:vml"
              />
      <![endif]-->
    <div style="margin:0 auto;max-width:600px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tr style="vertical-align:top;">
          <td style="background:#ffffff;background-position:center center;background-repeat:no-repeat;padding:0px;vertical-align:top;" height="0">
            <!--[if mso | IE]>
        <table
           border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
        >
          <tr>
            <td  style="">
      <![endif]-->
            <div class="mj-hero-content" style="margin:0px auto;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;">
                <tr>
                  <td style>
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;">
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="40" style="height:40px;">
      
    <![endif]-->
                          <div style="height:40px;"> &nbsp; </div>
                          <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Arial;font-size:20px;font-weight:700;line-height:1;text-align:left;color:#000000;">POZNAJ WSZYSTKIE OKNA OKNOPLAST</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Arial;font-size:13px;line-height:20px;text-align:left;color:#000000;">Otrzymujesz tego maila w podziękowaniu za zapisanie się do naszego newslettera. Bardzo nam miło, że interesujesz się naszymi oknami. Aby ułatwić Ci wybór idealnego rozwiązania przygotowaliśmy Vademecum okien OKNOPLAST. Dzięki niemu szybko i wygodnie możesz porównać nasze produkty, poznać ich główne cechy i dowiedzieć się, gdzie sprawdzają się najlepiej.</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" class="no-wrap-text" style="white-space: nowrap; font-size: 0px; padding: 10px 25px; word-break: break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:180px;line-height:100%;">
                            <tr>
                              <td align="center" bgcolor="#00B1EB" role="presentation" style="border:none;border-radius:3px;cursor:auto;height:48px;mso-padding-alt:10px 25px;background:#00B1EB;" valign="middle">
                                <p style="display:inline-block;width:130px;background:#00B1EB;color:#ffffff;font-family:Arial;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"> Pobierz Vademecum </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="height:20px;">
      
    <![endif]-->
                          <div style="height:20px;"> &nbsp; </div>
                          <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
            <!--[if mso | IE]>
            </td>
          </tr>
        </table>
      <![endif]-->
          </td>
        </tr>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
    
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#E5E5E5;background-color:#E5E5E5;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#E5E5E5;background-color:#E5E5E5;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="icona-outlook" style="vertical-align:top;width:120px;"
            >
          <![endif]-->
              <div class="mj-column-per-20 mj-outlook-group-fix icona" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:70px;">
                              <img height="auto" src="https://oknoplast.vercel.app/icon.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="70">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:480px;"
            >
          <![endif]-->
              <div class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;word-break:break-word;">
                      <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="height:10px;">
      
    <![endif]-->
                      <div style="height:10px;"> &nbsp; </div>
                      <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:16px;line-height:24px;text-align:left;color:#000000;">Pamiętaj, że w każdym momencie możesz odwiedzić salon Oknoplast i skorzystać z pomocy naszego Doradcy.</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:250px;">
                              <img alt height="auto" src="https://oknoplast.vercel.app/imgage.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;word-break:break-word;">
                      <!--[if mso | IE]>
    
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="height:20px;">
      
    <![endif]-->
                      <div style="height:20px;"> &nbsp; </div>
                      <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:24px;line-height:1;text-align:center;color:#000000;"><strong>Skontaktuj się</strong> z najbliższym salonem</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" vertical-align="middle" class="no-wrap-text" style="white-space: nowrap; font-size: 0px; padding: 10px 25px; word-break: break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:180px;line-height:100%;">
                        <tr>
                          <td align="center" bgcolor="#00B1EB" role="presentation" style="border:none;border-radius:3px;cursor:auto;height:48px;mso-padding-alt:10px 25px;background:#00B1EB;" valign="middle">
                            <p style="display:inline-block;width:130px;background:#00B1EB;color:#ffffff;font-family:Arial;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"> Znajdź Salon </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:32px;line-height:1;text-align:center;color:#000000;"><strong>Już 26 lat</strong> tworzymy przestrzeń</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
              <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:38px;font-weight:700;line-height:1;text-align:center;color:#00B1EB;">3000</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:15px;line-height:1;text-align:center;color:#000000;"><strong>salonów</strong> Oknoplast w <strong>13 krajach</strong></div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
              <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:38px;font-weight:700;line-height:1;text-align:center;color:#00B1EB;">70%</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:15px;line-height:1;text-align:center;color:#000000;">naszych klientów to <strong>klienci z polecenia</strong></div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
              <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:38px;font-weight:700;line-height:1;text-align:center;color:#00B1EB;">1.5 MLN</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:15px;line-height:1;text-align:center;color:#000000;"><strong>okien</strong> produkowanych każdego roku</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="border-bottom:solid #ddd 2px;border-top:solid #ddd 2px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;padding-top:15px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:180px;">
                              <img alt height="25" src="https://oknoplast.vercel.app/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:25px;width:100%;font-size:13px;" width="180">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
      >
        <tr>
      
              <td>
            <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#474950;border-radius:3px;width:30px;">
                              <tr>
                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://facebook.com/" target="_blank">
                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;display:block;" width="30">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#474950;border-radius:3px;width:30px;">
                              <tr>
                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                  <a href="https://instagram.com/" target="_blank">
                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;display:block;" width="30">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#474950;border-radius:3px;width:30px;">
                              <tr>
                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://linkedin.com/&title=&summary=&source=" target="_blank">
                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;display:block;" width="30">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#474950;border-radius:3px;width:30px;">
                              <tr>
                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                  <a href="https://youtube.com/" target="_blank">
                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;display:block;" width="30">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso | IE]>
              </td>
            
          </tr>
        </table>
      <![endif]-->
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial;font-size:14px;line-height:16px;text-align:center;color:#848484;">Wiadomość wysłana automatycznie - prosimy na nią nie odpowiadać. Otrzymujesz tego maila, ponieważ wyraziłeś zgodę na otrzymywanie informacji od  Oknoplast Sp. z o.o. i jego dystrybutorów. Zgodę możesz odwołać w każdej chwili,  klikając <a href="#" style="color :#00B1EB ">tutaj</a>. Więcej informacji o przetwarzaniu danych osobowych znajduje się na  <a href="#" style="color :#00B1EB">naszej stronie internetowej</a>.</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>


  
`

export default dashboard;
