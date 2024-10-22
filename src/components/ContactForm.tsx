"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { EmailStatus } from "@/components/EmailStatusAlert";
import { useRouter } from 'next/navigation'
 

const ContactForm = () => {

  const router = useRouter()

  const [responseMessage, setResponseMessage] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  // alert
  const [alertMsg, setAlertMsg] = useState<string>('');
  const [alertStatus, setAlertStatus] = useState<boolean>(false);
  // loading state
  const [isLoading, setIsLoading] = useState(false)
  // protect resubmit
  const [allowSubmit, setAllowSubmit] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has already submitted the form
    const hasSubmitted = localStorage.getItem("formSubmitted");
    if (hasSubmitted) {
        setAllowSubmit(false); // Hide form if already submitted
    }
}, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 second for fake submit protection level 1
    localStorage.setItem("formSubmitted", "true"); // Setting localstorage value so that multiple submit not allowed
    // if no localstorage available redirect user to home
    if (!localStorage){
      router.push('/')
    }
    const emailBodyMsg = `
      <b>Contact Request From Portfolio</b>
      <b>Sender:</b> ${senderName} - ${senderEmail}
      <hr/>
      <p>${emailBody}</p>
      <br/>
      Best regards,<br/>
      ${senderName}
    `;

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: emailBodyMsg }),
    });

    const data = await response.json();
    if(data.status == "success"){
      setAlertStatus(true)
      setAlertMsg("I have received your message. Wait for response.")
      setIsLoading(false)
      setAllowSubmit(false)
      // clear
      setEmailBody("")
      setSenderName("")
      setSenderEmail("")
    }else{
      setAlertStatus(false)
      setAlertMsg("Message sending failed: mail me at: contact@himelrana.com")
      setIsLoading(false)
      setAllowSubmit(false)
      // clear
      setEmailBody("")
      setSenderName("")
      setSenderEmail("")
    }
  };

  return (
    <>
      {alertMsg && <EmailStatus msg={alertMsg} status={alertStatus} />}
      <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once the form is submitted, you will be redirected to the home page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              required
              placeholder="Enter your name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              required
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            {allowSubmit && <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading? "Loading..." : "Send Email"}
            </Button>}
            {/* Not allowd resubmit */}
            {!allowSubmit && <Button disabled>{alertMsg? alertMsg : "Retry no allowed. contact me at: contact@himelrana.com"}</Button>}
          </div>
          
        </CardFooter>
        {responseMessage && <p>{responseMessage}</p>} {/* Display response message */}
      </form>
    </Card>
    </>
  
  );
};

export default ContactForm;
