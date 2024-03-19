import React from 'react'
import { useParams } from 'react-router-dom';
import blgimg1 from "../../../assets/img/OurProduct/GreenHouseMat2.jpg";
import blgimg2 from "../../../assets/img/OurProduct/farm-floor.jpg";

const BlogContent = () => {
    const blogdata = [
        {
          id: 1,
          img: blgimg1,
          heading:
            "Know All About Mycotoxicosis Disease and its Management inPoultry",
          content:
            " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
          title1: "Animal",
          title2: "Animal",
          title3: "blog",
          title4: "Farmer",
          bottomcontent: "Refit Animal Care",
        },
        {
          id: 2,
          img: blgimg2,
          heading:
            " Management inPoultry Know All About Mycotoxicosis Disease and its",
          content:
            " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
          title1: "Animal",
          title2: "Animal",
          title3: "blog",
          title4: "Farmer",
          bottomcontent: "Refit Animal Care",
        },
      ];
    const { id } = useParams();
    const blog = blogdata.find(blog => blog.id === parseInt(id));
  return (
<>
<h2>{blog.title}</h2>
      <p>{blog.content}</p>
</>
    )
}

export default BlogContent