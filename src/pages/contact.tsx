import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Mail from "../../content/assets/mailer.jpg";
import ReactGA from 'react-ga';
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactGA.initialize(process.env.GOOGLE_ID);

const Honeypot = () =>
    <div className="hidden">
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <p>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <p>
                <label>Email: <input type="text" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </div>

export default function Contact(props) {
    const siteTitle = process.env.SITE_NAME;
    const [data, setData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        if (typeof "window" !== "undefined") {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, []);

    const notify = () => toast("Your form is on the way. Thanks for contacting us");

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        try {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": process.env.FORM_NAME, ...data })
            })
                .then(() => notify())
                .catch(error => alert(error));

        } catch (e) {
            console.log(e);
        }
        e.preventDefault();
    };

    const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

    const { name, email, message } = data;

    return (
        <Layout location={props.location} title={siteTitle} layoutClass="justify-content-center p-5 m-auto">
            <SEO
                description="tiling in Utah"
                lang="en"
                title="Contact"
                meta={[`we work tiling in utah`, `we work cabinetry in Utah and California`]}
                keywords={[`tiling in utah`, 'cabinets in utah', 'cabinets and tiling']}
            />
            <Honeypot />
            <ToastContainer />
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form name={process.env.FORM_NAME} onSubmit={handleSubmit} data-netlify="true" method="POST">
                        <input type="hidden" name="form-name" value={process.env.FORM_NAME} />
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="enter your name" type="text" value={name} onChange={handleChange} name="name" />

                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" value={message} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-12 col-lg-5">
                    <img src={Mail} />
                </div>
            </div>
        </Layout>
    )
}
