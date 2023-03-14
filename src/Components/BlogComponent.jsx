import React from "react";
import SmallHero from "./SmallHero";
import Footer from "./Footer";
import blog1 from "../resources/images/blog1.png";
import blog2 from "../resources/images/blog2.png";
import blog3 from "../resources/images/blog3.jpg";
// import BlogComponent from "../Components/BlogComponent";


const BlogComponent = () =>{

    return (

        <>
           <SmallHero title = 'Blog' />
           <section className = 'blog-all'>

           
           <section className = 'blog-frame'>
            <section className = 'blog-blog'>
                <BlogSoup />
            </section>
            <section className = 'blog-highlights'>
            <h1>Highlights</h1>
            </section>
           </section>

           </section>
           <Footer />
        </>
    )
}



const BlogSoup = () =>{

    const blogData = [{
        title : 'Cyber Security for Businesses',
        date : 'Nov 1st',
        content : `As the digital landscape continues to expand, cybersecurity has become an essential aspect
        of business operations, particularly for small and medium-sized enterprises (SMEs).
       
        Despite the misconception that SMEs are less likely to experience a cyber attack, recent
data breaches highlight the importance of cybersecurity measures for SMEs. In 2020, over
4,000 data breaches were reported, with over 37 billion records exposed. This shows that
SMEs are often targeted because they lack the robust security measures that larger
companies have in place.


Cybersecurity is an essential aspect of any business, but for SMEs,
it can be a matter of survival. In this blog post, we will explore the importance of employee
awareness and managed security for SMEs to enhance cybersecurity measures and prevent
data breaches



We will also discuss some real-life examples of data breaches and their
consequences for SMEs.


By the end of this post, you will have a better understanding of the
importance of cybersecurity measures for SMEs and how to take proactive measures to
protect your business.

        `,
        
        author : 'Kelvin Haris',
        image : blog1        
    }
,{
    title : 'Employee Awareness',
    date : 'Nov 2nd',
    content : `By the end of this post, you will have a better understanding of the
    importance of cybersecurity measures for SMEs and how to take proactive measures to
    protect your business.
    
    By the end of this post, you will have a better understanding of the
importance of cybersecurity measures for SMEs and how to take proactive measures to
protect your business.

An example that highlights the importance of employee awareness is an attack that
happened in 2021, when a US-based insurance company, Geico, experienced a data breach
that exposed customers' driver's license numbers. The breach affected around 2.4 million
Geico customers and was caused by a phishing attack that tricked a Geico employee into
giving up their login credentials.

According to Geico, the phishing email appeared to be a legitimate message from a vendor,
which prompted the employee to click on a malicious link that enabled the attacker to steal
their login information. With access to the employee's account, the attacker was able to
access sensitive information on Geico's internal systems, including customers' driver's
license numbers.

The incident highlights the importance of employee awareness and
training to prevent phishing attacks.

To prevent this from happening, it's crucial for SMEs to focus on employee awareness as a
critical part of their cybersecurity strategy. Here are some tips to enhance employee
awareness:

● Regular Training: Providing regular training on cybersecurity best practices is an
effective way to ensure that employees are aware of potential threats and how to
avoid them. This training could include topics such as password hygiene, recognizing
phishing emails, and how to avoid malware attacks.

● Simulated Phishing Attacks: To test employee awareness, SMEs can conduct
simulated phishing attacks to see if employees can spot the difference between a
legitimate and a fake email. This helps to identify areas where additional training
may be required.

● Clear Policies: Clear policies on the use of personal devices for work purposes,
access to company networks, and the handling of sensitive data can help employees
to understand their role in maintaining cybersecurity.

● Reporting Suspicious Activity: Encouraging employees to report any suspicious
activity or potential threats they come across can help SMEs to identify and address
any potential threats before they become more significant problems.
By enhancing employee awareness, SMEs can reduce the risk of data breaches caused by
human error, and better protect their sensitive data from cybercriminals.
    `,
    author : 'Kelvin Haris',
    image: blog2        
},
{
    title : 'First Blog',
    date : 'Nov 1st',
    content : `Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit`,
    author : 'Kelvin Haris',
    image: blog3        
}]


const blogItems = blogData.map(items=>{
    const bTitle = `${items.title}`;
    const bDate = `${items.date}`;
    const bContent = `${items.content}`;
    const bAuthor = `${items.author}`;
    const image = `${items.image}`;
    return<>
   
        <div className = 'each-blog'>
            <div className = 'each-blog-image-area'>
                <img src = {image} />
            </div>
            <div className = 'each-blog-text-area'>
                <div className = 'each-blog-text-header'>
                    {bDate}
                </div>
                <div className = 'each-blog-text-body'>
                    <h1>{bTitle}</h1>
                    <div className = 'ebtbb'>
                        {bContent}
                    </div>
                </div>
            </div>
        </div>

         </>
    

});


return (
<>

    {blogItems}

</>
);
}

export default BlogComponent