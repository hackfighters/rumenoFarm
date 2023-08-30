import React from "react";

import Prdimg1 from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdimg2 from "../../../assets/img/prod-img/prdcom-2.jpg";
import Prdimg3 from "../../../assets/img/prod-img/prdcom-3.jpg";
import Prdimg4 from "../../../assets/img/prod-img/prdcom-4.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import Prdimg7 from "../../../assets/img/prod-img/prdGS-1.jpg";
import Prdimg8 from "../../../assets/img/prod-img/prdGS-2.jpg";


const PrdCard2 = () => {
  const PrdData1 = [
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg1,
      txt1: "Tanav Mukti:",
      txt2: "The Advanced Supplement for Animal Stress Relief, Energy Boosting, and Immunity Enhancement",
      txt3: " Bringing home a new animal or transporting one can be an exciting but stressful experience for both you and your animal. The change in environment, routine, and diet can trigger stress, anxiety, and weakened immunity in animals. That's why it's crucial to give them the right kind of support to help them adjust and thrive in their new surroundings. And this is where Tanav Mukti comes in as the ultimate stress reliever, energy booster, and immunity enhancer for animals.",
      txt4: "What is Tanav Mukti?",
      txt5: "Tanav Mukti is an advanced supplement designed to provide holistic support for animals' overall wellbeing. It is made with a blend of natural ingredients that work synergistically to reduce stress, boost energy, and enhance immunity in animals. Tanav Mukti is a highly effective supplement that can be used for different animal species, including goats, sheeps, cattle, dogs, cats, horses, birds, and livestock.",
      txt6: "Benefits of Tanav Mukti",
      txt7: "Stress Relief: Tanav Mukti helps animals cope with stress and anxiety related to changes in environment, routine, or diet. It promotes relaxation, calmness, and a sense of well-being, which can help your animal adjust to its new surroundings more easily.",
      txt8: "Energy Boost: Tanav Mukti is also an excellent energy booster that provides animals with the necessary nutrients and vitamins to stay active and healthy. It improves endurance, strength, and vitality, allowing animals to perform at their best.",
      txt9: "Immunity Enhancement: Tanav Mukti contains powerful antioxidants and immune-boosting compounds that help animals fight off infections and diseases. It strengthens their immune system, making them less susceptible to common illnesses and health issues.",
      txt10:
        "Easy to Use: Tanav Mukti comes in an easy-to-administer powder form, that can be easily mixed with food or water. It's also safe for animals of all ages, breeds, and sizes.",
      txt11: "Why choose Tanav Mukti?",
      txt12:
        "Tanav Mukti is a reliable and effective solution for animal stress relief, energy boosting, and immunity enhancement. It's made with high-quality natural ingredients that are safe and gentle on animals' bodies. Moreover, Tanav Mukti is formulated by animal experts who understand the unique needs and challenges of animals. With Tanav Mukti, you can be assured that your animal is getting the best possible support for their overall health and wellbeing.",
      txt13: "Conclusion",
      txt14:
        "In summary, Tanav Mukti is an advanced supplement that provides comprehensive support for animals' stress relief, energy boosting, and immunity enhancement. It's made with natural ingredients and is safe and easy to administer. Whether you have a new purchased animal or a transported one, Tanav Mukti can help them adjust and thrive in their new surroundings. So, give your furry friend the best possible care and support with Tanav Mukti.",
    },
    {
      name: "Neonato",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg2,
      name2: "test 2",
    },
    {
      name: "Energico",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg3,
      name2: "test",
    },
    {
      name: "Digesto Plus",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg4,
      name2: "test",
    },
    {
      name: "Micro-Flora",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg5,
      name2: "test",
    },
    {
      name: "Rumenovita",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg6,
      name2: "test",
    },
  ];
  const PrdData2 = [
    {
      name: "Feeding Nipple",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg7,
    },
    {
      name: "Pro-Lac",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg8,
    },
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg1,
    },
    {
      name: "Neonato",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg2,
    },
    {
      name: "Energico",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg3,
    },
    {
      name: "Digesto Plus",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg4,
    },
    {
      name: "Micro-Flora",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg5,
    },
    {
      name: "Rumenovita",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg6,
    },
  ];

  return PrdData2.map((card2) => {
    return (
      <>
        <div
          class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
              <img class="img-fluid w-100" src={card2.img} alt="" />
            </div>
            <div class="text-center p-4">
              <a class="d-block h4 mb-2 fw-bold text-decoration-none">
                {card2.name}
              </a>
              <span class="text-primary me-1">{card2.price}</span>
              <span class="text-body text-decoration-line-through">
                {card2.oldprice}
              </span>
            </div>
            <div class="d-flex border-top">
              <small class="w-50 text-center border-end py-2">
                <a class="text-body">
                  <i class="fa fa-eye text-primary me-2"></i>View detail
                </a>
              </small>
              <small class="w-50 text-center py-2">
                <a class="text-body">
                  <i class="fa fa-shopping-bag text-primary me-2"></i>Add to
                  cart
                </a>
              </small>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default PrdCard2;
