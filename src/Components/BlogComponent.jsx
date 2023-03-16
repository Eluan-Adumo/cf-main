import React, {useEffect, useState} from "react";
import SmallHero from "./SmallHero";
import Footer from "./Footer";
import blog1 from "../resources/images/blog1.png";
import blog2 from "../resources/images/blog2.png";
import blog3 from "../resources/images/blog3.jpg";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

// import BlogComponent from "../Components/BlogComponent";


const BlogComponent = (props) =>{

    return (

        <>
           
           {
            props.blogType == "summary"? <BlogSum /> :
           
           <section className = 'blog-all'>

           
           <section className = 'blog-frame'>
            <section className = 'blog-blog'>

                      <BlogSoup editable = {props.editable} /> 
            </section>
            <section className = 'blog-highlights'>
                <center><p className = 'link-btn'>More from us</p></center>
                <section className="blog-h-content">
                <BlogHighlights />
                </section>
            
            </section>
           </section>

           </section>
           }
           
        </>
    )
}

const BlogSum = () =>{
    const date = new Date().toDateString();

const [feedBack, setFeedBack] = useState([]);
const [loading, setLoading] = useState(true);
const [loadNet, setLoadNet] = useState("loader");
useEffect(()=>{
    setTimeout(()=>{
        fetchArticles();
    }, 10000);
    
})
async function fetchArticles(){

    
    await axios.get("http://localhost:1337/api/fetch-records").then(function(response){
        setFeedBack(response.data);
        setLoading(false);

    });


}

const articleContent = feedBack.map(item=>{
    const artTitle = item.articleTitle;
    const artContent = item.articleContent.slice(0, 20);
    const artImage = item.articlePhoto;
    const dateU = item.dateUploaded;

    return<>

   
            <div className = 'each-blog-sum' style = {{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.4), rgba(0, 0, 50, 0.4)),url(${artImage})`
            }}>
                

                    <div className = 'each-blog-sum-text-body'>
                        <h1>{artTitle}</h1>
                        <div className = 'ebtbb'>
                            {artContent}
                            <p>
                                <Link to = "/blog">Read More</Link>
                            </p>
                        </div>
                    </div>

            </div>
   

    </>
    
});


return (
<>

    {loading ? <center><Spinner /></center> : articleContent}

</>
);
}




const BlogSoup = (props) =>{
    const date = new Date().toDateString();
    const blogData = [{
        title : 'Cyber Security for Businesses',
        date : date,
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
    date : date,
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

Regular Training: Providing regular training on cybersecurity best practices is an
effective way to ensure that employees are aware of potential threats and how to
avoid them. This training could include topics such as password hygiene, recognizing
phishing emails, and how to avoid malware attacks.

Simulated Phishing Attacks: To test employee awareness, SMEs can conduct
simulated phishing attacks to see if employees can spot the difference between a
legitimate and a fake email. This helps to identify areas where additional training
may be required.

Clear Policies: Clear policies on the use of personal devices for work purposes,
access to company networks, and the handling of sensitive data can help employees
to understand their role in maintaining cybersecurity.

Reporting Suspicious Activity: Encouraging employees to report any suspicious
activity or potential threats they come across can help SMEs to identify and address
any potential threats before they become more significant problems.
By enhancing employee awareness, SMEs can reduce the risk of data breaches caused by
human error, and better protect their sensitive data from cybercriminals.
    `,
    author : 'Kelvin Haris',
    image: blog2        
},
{
    title : 'Managed Security',
    date : date,
    content : `While employee awareness is a critical part of cybersecurity for SMEs, it's not the only
    solution. SMEs also need to have robust security measures in place to protect against cyber
    threats. One effective way to do this is through managed security services.
    Managed security involves outsourcing the management of a company's security systems to
    a third-party provider. This provider is responsible for implementing, maintaining, and
    monitoring the security systems to ensure that they are working effectively. This can
    include things like firewall management, intrusion detection, and vulnerability scanning.
    There are several benefits of using managed security services for SMEs, including:
    
     Expertise: Managed security providers have specialized expertise and experience in
    cybersecurity, which SMEs may not have in-house. This means that SMEs can benefit
    from the latest security technologies and techniques without having to invest in
    them themselves.
    
     Cost-Effective: Managed security can be more cost-effective than building and
    maintaining an in-house security team. SMEs can outsource their security needs to a
    provider and pay a fixed fee for the service, rather than having to invest in expensive
    security infrastructure and personnel.
    
     24/7 Monitoring: Managed security providers offer round-the-clock monitoring and
    response to security threats. This means that SMEs can be confident that their
    systems are being monitored and protected, even outside of business hours.
    
     Scalability: Managed security services can be scaled up or down depending on the
    needs of the SME. This means that SMEs can adjust their security services as their
    business grows or changes.
    By using managed security services, SMEs can better protect themselves from cyber
    threats, without having to invest in expensive security infrastructure or hire additional
    staff. It's an effective way for SMEs to strengthen their cybersecurity posture and ensure
    that they can focus on running their business, rather than worrying about security threats.`,
    image: blog3        
}]
const [feedBack, setFeedBack] = useState([]);
const [loading, setLoading] = useState(true);
const [loadNet, setLoadNet] = useState("loader");
useEffect(()=>{
    setTimeout(()=>{
        fetchArticles();
    }, 10000);
    
})
async function fetchArticles(){

    
    await axios.get("http://localhost:1337/api/fetch-records").then(function(response){
        setFeedBack(response.data);
        setLoading(false);

    });


}

const articleContent = feedBack.map(item=>{
    const artTitle = item.articleTitle;
    const artContent = item.articleContent;
    const artImage = item.articlePhoto;
    const dateU = item.dateUploaded;

    return<>

   
            <div className = 'each-blog'>
                <div className = 'each-blog-image-area' style = {{
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.4), rgba(0, 0, 50, 0.4)),url(${artImage})`,
                    border: "0px solid white",
                    borderRadius: "10px"
                }}>
                    {/* <img src = {artImage} /> */}
                </div>
                <div className = 'each-blog-text-area'>
                    <div className = 'each-blog-text-header'>
                        {dateU}
                    </div>
                    <div className = 'each-blog-text-body'>
                        <h1>{artTitle}</h1>
                        <div className = 'ebtbb'>
                            {artContent}

                            {
                                props.editable
                                &&
                                <p>
                                    <br />
                                    <input type = 'button' value = 'Delete' className = 'act-btn' />
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
   

    </>
    
});
// const blogItems = blogData.map(items=>{
//     const bTitle = `${items.title}`;
//     const bDate = `${items.date}`;
//     const bContent = `${items.content}`;
//     const bAuthor = `${items.author}`;
//     const image = `${items.image}`;


//     return<>
   
//         <div className = 'each-blog'>
//             <div className = 'each-blog-image-area'>
//                 <img src = {image} />
//             </div>
//             <div className = 'each-blog-text-area'>
//                 <div className = 'each-blog-text-header'>
//                     {bDate}
//                 </div>
//                 <div className = 'each-blog-text-body'>
//                     <h1>{bTitle}</h1>
//                     <div className = 'ebtbb'>
//                         {bContent}
//                     </div>
//                 </div>
//             </div>
//         </div>

//          </>
    

// });


return (
<>

    {loading ? <Spinner /> : articleContent}

</>
);
}



function BlogHighlights(){
    const [highlights, setHighlights] = useState([]);

    const fetchHighlights= async()=>{
        const url = "http://localhost:1337/api/fetch-highlights";

        await axios.get(url).then((response)=>{
            setHighlights(response.data);
        });
        
    }
    const bHighlights = highlights.map(item=>{
        const artTitle = item.articleTitle;
        const artContent = item.articleContent.slice(0, 100);
        const artImage = item.articlePhoto;
        const dateU = item.dateUploaded;


        return<>
            <div className = 'each-highlight'>
                <div className = 'highlight-image-side' style = {{
                    backgroundImage : `url(${artImage})`
                }}>

                </div>
                <div className = 'highlight-text-side'>
                    <div className = 'highlight-text-side-content'>
                        <h3>{artTitle}</h3>
                        <p>
                        {artContent}
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    });
    useEffect(()=>{
        fetchHighlights();
    }, [])

    return(
        <>
            {bHighlights}
        </>
    );
}
export default BlogComponent