import logo from "./logo7.png"
import doc1 from "./doc1.webp"
import doc2 from "./doc2.webp"
import doc3 from "./doc3.webp"
import doc4 from "./doc4.webp"
import doc5 from "./doc5.webp"
import doc6 from "./doc6.webp"
import doc7 from "./doc7.webp"
import doc8 from "./doc8.webp"
import doc9 from "./doc9.webp"
import doc10 from "./doc10.webp"
import doc11 from "./doc11.webp"
import doc12 from "./doc12.webp"
import doc13 from "./doc13.webp"
import doc14 from "./doc14.webp"
import doctors from "./doctors.webp"
import doctors1 from "./doctors1.webp"
import spec1 from "./general-doctor.png"
import spec2 from "./Endocrinologists.png"
import spec3 from "./cardiologists.png"
import spec4 from "./Dermatologist.png"
import spec5 from "./Gynecologist.png"
import spec6 from "./Neurologist.png"
import spec7 from "./orthopedic doctors.png"
import spec8 from "./Pediatricians.png"
import spec9 from "./psychiatrists.png"
import verified from "./verified.png"
import dropdown from "./dropdown.png"
import user1 from "./user1.webp"


export const assets = {
    logo,
    doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13, doc14,
    doctors,
    doctors1,
    verified,dropdown,user1
}

export const specialityData = [
    {
        speciality:"General Doctor",
        image:spec1
    },

    {
        speciality:"Endocrinologists",
        image:spec2
    },
    {
        speciality:"Cardiologists",
        image:spec3
    },
    {
        speciality:"Dermatologist",
        image:spec4
    },
   
    {
        speciality:"Gynecologist",
        image:spec5
    },
    {
        speciality:"Neurologist",
        image:spec6
    },
    {
        speciality:"Orthopedic",
        image:spec7
    },
    {
        speciality:"Pediatrician",
        image:spec8
    },
    {
        speciality:"Psychiatrist",
        image:spec9
    },
]

export const doctorsList = [
    {
        _id: 'doc1',
        name:"Dr. Ramesh Chandran" ,
        speciality:"General Doctor",
        degree:"MBBS",
        about:"Dr. Ramesh Chandran is a highly experienced general physician with a commitment to providing comprehensive healthcare to patients of all ages",
        fees:500,
        address:{
            line1:'No-789, Family Clinic',
            line2:'Vidyanagr, Hubballi, Karnataka'
        },
        image:doc1,
    },
    {
        _id: 'doc2',
        name:"Dr. Priya Patel" ,
        speciality:"Endocrinologists",
        degree:"MBBS, MD, DM (Endocrinology)",
        about:"Dr. Priya Patel is a skilled endocrinologist with a focus on pediatric endocrinology and metabolic disorders. She is passionate about providing comprehensive care to children and adolescents with hormonal imbalances. ",
        fees:450,
        address:{
            line1:'#456, Hormone Clinic,',
            line2:'Unkal Cross, Hubballi, Karnataka'
        },
        image:doc2,
    },
    {
        _id: 'doc3',
        name:"Dr. Avinash Kumar" ,
        speciality:"Cardiologists",
        degree:"MBBS, MD (General Medicine), DM (Cardiology)",
        about:"Dr. Ramesh Chandran is a highly experienced cardiologist with a commitment to providing comprehensive cardiovascular care. He is skilled in diagnosing and treating a wide range of heart conditions, including coronary artery disease, heart failure, and arrhythmias. His compassionate bedside manner and personalized approach make him a trusted doctor in the community.",
        fees:550,
        address:{
            line1:'789, Heart Clinic,',
            line2:'Gurudatta Bhavan, Hubballi, Karnataka'
        },
        image:doc3,
    },
    {
        _id: 'doc4',
        name:"Dr. Meena Sharma" ,
        speciality:"Dermatologist",
        degree:"MBBS, MD (Dermatology)",
        about:"Dr. Meena Sharma is a skilled dermatologist with a focus on cosmetic dermatology and hair disorders. She is passionate about providing personalized treatments to enhance skin health and appearance. Her expertise in laser therapy, chemical peels, and hair restoration allows her to offer effective solutions for various skin concerns.",
        fees:400,
        address:{
            line1:'#456, Skin Care Clinic, 2nd Floor',
            line2:'Hosur Complex, Hosur, Hubballi, Karnataka'
        },
        image:doc4,
    },
    {
        _id: 'doc5',
        name:"Dr. Aishwarya M" ,
        speciality:"Gynecologist",
        degree:"MBBS, MD (Obstetrics & Gynecology)",
        about:"Dr. Aishwarya M is a skilled gynecologist with a focus on minimally invasive gynecology and fertility treatments. She is passionate about providing comprehensive care for women's reproductive health needs. Her expertise in laparoscopic surgery and IVF allows her to offer advanced treatment options for various gynecological conditions.",
        fees:450,
        address:{
            line1:'#32, Nova Fertility Clinic, ',
            line2:'Manjunath Nagar, Hubballi, Karnataka'
        },
        image:doc5,
    },
    {
        _id: 'doc6',
        name:"Dr. Seema" ,
        speciality:"Neurologist",
        degree:"MBBS, MD (General Medicine), DM (Neurology)",
        about:"Dr. Seema is a skilled neurologist with a focus on pediatric neurology and neuromuscular disorders. She is passionate about providing comprehensive care for children and adolescents with neurological conditions. Her expertise in cerebral palsy, epilepsy, and muscular dystrophy allows her to effectively manage these disorders.",
        fees:550,
        address:{
            line1:'Shushrutha Pediatric Neurology Hospital, ',
            line2:'Vidyanagar, Hubballi, karnataka'
        },
        image:doc6,
    },
    {
        _id: 'doc7',
        name:"Dr. Indrani Kulkarni" ,
        speciality:"Orthopedic",
        degree:"MBBS, MD (General Medicine), MS (Orthopedics)",
        about:"Dr. Indrani Kulkarni is a skilled orthopedist with a focus on pediatric orthopedics and scoliosis treatment. She is passionate about providing comprehensive care for children and adolescents with musculoskeletal conditions. Her expertise in spinal surgery and bracing allows her to effectively manage these disorders.",
        fees:400,
        address:{
            line1:'Suchirayu Hospital, Ravi Nagar',
            line2:'Gokul Road, Hubli'
        },
        image:doc7,
    },
    {
        _id: 'doc8',
        name:"Dr. Savita K" ,
        speciality:"Pediatrician",
        degree:"MBBS, MD (Pediatrics)",
        about:"Dr. Savita K is a skilled pediatrician with a focus on developmental pediatrics and behavioral health. She is passionate about providing comprehensive care for children with developmental delays, learning disabilities, and behavioral challenges. Her expertise in early intervention and therapy allows her to effectively support these children and their families.",
        fees:400,
        address:{
            line1:'Suchirayu Hospital, Ravi Nagar',
            line2:'Gokul Road, Hubli'
        },
        image:doc8,
    },
    {
        _id: 'doc9',
        name:"Dr. Savita K" ,
        speciality:"Pediatrician",
        degree:"MBBS, MD (Pediatrics)",
        about:"Dr. Savita K is a skilled pediatrician with a focus on developmental pediatrics and behavioral health. She is passionate about providing comprehensive care for children with developmental delays, learning disabilities, and behavioral challenges. Her expertise in early intervention and therapy allows her to effectively support these children and their families.",
        fees:400,
        address:{
            line1:'Pravinya Hospital, Taj Nagar',
            line2:'Unkal, Hubli'
        },
        image:doc9,
    },
    {
        _id: 'doc10',
        name:"Dr. Madhav Bhat" ,
        speciality:"Psychiatrist",
        degree:"MBBS, MD (Psychiatry)",
        about:"Dr. Madhav Bhat is a renowned psychiatrist with extensive experience in diagnosing and treating various mental health disorders. He specializes in mood disorders, anxiety disorders, and psychotic disorders. His compassionate approach and dedication to patient care have earned him a reputation as a trusted physician in the community.",
        fees:800,
        address:{
            line1:'#123, Psychiatry Hospital, Navanagar',
            line2:'Hubli, Dharwad'
        },
        image:doc10,
    },
    {
        _id: 'doc11',
        name:"Dr. Krishna Bhat" ,
        speciality:"Psychiatrist",
        degree:"MBBS, MD (Psychiatry)",
        about:"Dr. Krishna Bhat is a skilled psychiatrist with a focus on child and adolescent psychiatry. He is passionate about providing comprehensive care for children and adolescents with mental health conditions. His expertise in ADHD, autism spectrum disorders, and depression allows him to effectively support these young people and their families.",
        fees:700,
        address:{
            line1:'#123, Psychiatry Hospital, Navanagar',
            line2:'Hubli, Dharwad'
        },
        image:doc11,
    },
]