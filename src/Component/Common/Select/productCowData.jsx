import React from "react";
import Modal from "react-bootstrap/Modal";

import Prdimg1 from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdimg2 from "../../../assets/img/prod-img/prdcom-2.jpg";
import Prdimg3 from "../../../assets/img/prod-img/prdcom-3.jpg";
import Prdimg4 from "../../../assets/img/prod-img/prdcom-4.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const PrdCard1 = ({name, price }) => {
  
  const PrdData1 = [
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg1,
      txt1: "Tanav Mukti:",
      txt2: "The Advanced Supplement for Animal Stress Relief, Energy Boosting, and Immunity Enhancement Bringing home a new animal or transporting one can be an exciting but stressful experience for both you and your animal. The change in environment, routine, and diet can trigger stress, anxiety, and weakened immunity in animals. That's why it's crucial to give them the right kind of support to help them adjust and thrive in their new surroundings. And this is where Tanav Mukti comes in as the ultimate stress reliever, energy booster, and immunity enhancer for animals.",
      txt3: "What is Tanav Mukti?",
      txt4: "Tanav Mukti is an advanced supplement designed to provide holistic support for animals' overall wellbeing. It is made with a blend of natural ingredients that work synergistically to reduce stress, boost energy, and enhance immunity in animals. Tanav Mukti is a highly effective supplement that can be used for different animal species, including goats, sheeps, cattle, dogs, cats, horses, birds, and livestock.",
      txt5: "Benefits of Tanav Mukti",
      txt6: "Stress Relief: Tanav Mukti helps animals cope with stress and anxiety related to changes in environment, routine, or diet. It promotes relaxation, calmness, and a sense of well-being, which can help your animal adjust to its new surroundings more easily.",
      txt7: "Energy Boost: Tanav Mukti is also an excellent energy booster that provides animals with the necessary nutrients and vitamins to stay active and healthy. It improves endurance, strength, and vitality, allowing animals to perform at their best.",
      txt8: "Immunity Enhancement: Tanav Mukti contains powerful antioxidants and immune-boosting compounds that help animals fight off infections and diseases. It strengthens their immune system, making them less susceptible to common illnesses and health issues.",
      txt9: "Easy to Use: Tanav Mukti comes in an easy-to-administer powder form, that can be easily mixed with food or water. It's also safe for animals of all ages, breeds, and sizes.",
      txt10: "Why choose Tanav Mukti?",
      txt11:
        "Tanav Mukti is a reliable and effective solution for animal stress relief, energy boosting, and immunity enhancement. It's made with high-quality natural ingredients that are safe and gentle on animals' bodies. Moreover, Tanav Mukti is formulated by animal experts who understand the unique needs and challenges of animals. With Tanav Mukti, you can be assured that your animal is getting the best possible support for their overall health and wellbeing.",
      txt12: "Conclusion",
      txt13:
        "In summary, Tanav Mukti is an advanced supplement that provides comprehensive support for animals' stress relief, energy boosting, and immunity enhancement. It's made with natural ingredients and is safe and easy to administer. Whether you have a new purchased animal or a transported one, Tanav Mukti can help them adjust and thrive in their new surroundings. So, give your furry friend the best possible care and support with Tanav Mukti.",
    },
    {
      name: "Neonato",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg2,
      txt1: "Neonato",
      txt2: "Neonato is a specially designed bioactive supplement that provides essential support for the health and immunity of newborn animals, kids, and chicks. It contains a unique blend of natural ingredients that work synergistically to maintain a healthy gut microflora, boost immunity, and prevent the growth of harmful bacteria. ",
      txt3: "The Benefits of Neonato",
      txt4: "Safe and Easy to Use: Neonato is a safe and easy-to-use supplement that can be added to the animal's feed or water. It does not contain any harmful chemicals or antibiotics, and is gentle on the animal's digestive system.",
      txt5: "",
      txt6: "Kills Harmful Bacteria: Neonato is highly effective in killing harmful bacteria that can cause diseases and infections in newborn animals, kids, and chicks. It creates an environment in the gut that is unfavorable to the growth of harmful microorganisms, thereby protecting the animals from potential infections.",
      txt7: "Saves Good Bacteria : Unlike antibiotics, which kill both good and bad bacteria, Neonato only targets harmful microorganisms, while preserving the beneficial ones. This helps maintain a healthy balance of gut microflora, which is essential for optimal digestive and immune health.",
      txt8: "Boosts Immunity: Neonato contains natural immune-boosting ingredients that stimulate the production of antibodies and other immune cells. This enhances the animal's ability to fight off infections and diseases, and helps them develop a strong immune system from an early age.",
      txt9: "Improves Digestion: Neonato promotes the growth of beneficial bacteria in the gut, which helps improve digestion and nutrient absorption. This can lead to better growth, development, and overall health of newborn animals, kids, and chicks.",
      txt10: "Why Choose Neonato?",
      txt11:
        "Neonato is a reliable and effective solution for supporting the health and immunity of newborn animals, kids, and chicks. It is made with high-quality natxural ingredients that have been carefully selected for their beneficial properties. Neonato is also formulated by animal experts who understand the unique needs and challenges of newborn animals, kids, and chicks.",
      txt12: "Conclusion",
      txt13:
        "In summary, Neonato is a bioactive supplement that provides essential support for the health and immunity of newborn animals, kids, and chicks. It kills harmful bacteria and viruses, while preserving the beneficial ones, boosts immunity, improves digestion, and is safe and easy to use. With Neonato, you can give your newborn animals, kids, and chicks the best possible start in life and help them grow up strong and healthy.",
    },
    {
      name: "Energico",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg3,
      txt1: "Energico",
      txt2: "Energico is the premium electrolyte supplement designed for animal health and performance, brought to you by Rumeno. Formulated with essential electrolytes, dextrose, maltodextrin, and probiotics, Energico provides a quick source of energy and promotes proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Trust Rumeno for the ultimate support in keeping your animals healthy, energized, and performing at their best.",
      txt3: "The Benefits of Neonato",
      txt4: "Rumeno's Energico is the ultimate electrolyte supplement for supporting animal health and performance. Made with the highest quality ingredients, including essential electrolytes, dextrose, maltodextrin, and probiotics, Energico provides a quick and effective source of energy and promotes proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Choose Energico and give your animals the support they need to thrive.",
      txt5: "",
      txt6: "When it comes to animal health and performance, trust the experts at Rumeno and Energico. Our premium electrolyte supplement is packed with essential electrolytes, dextrose, maltodextrin, and probiotics, providing a quick source of energy and promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. With Energico, you can rest assured that your animals are receiving the highest quality care and support available.",
      txt7: "Give your animals the premium care and support they deserve with Rumeno's Energico. Our advanced electrolyte supplement is specially formulated with essential electrolytes, dextrose, maltodextrin, and probiotics, promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Choose Energico and see the difference in your animals' performance and overall well-being.",
      txt8: "Rumeno's Energico is the top choice for animal owners who demand the best for their animals. Our premium electrolyte supplement is made with only the highest quality ingredients, including essential electrolytes, dextrose, maltodextrin, and probiotics, providing a quick source of energy and promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Give your animals the support they need to thrive with Energico by Rumeno.",
      txt9: "",
      txt10: "",
      txt11: "",
      txt12: "",
      txt13: "",
    },
    {
      name: "Digesto Plus",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg4,
      txt1: "Digesto Plus",
      txt2: "Digesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals.",
      txt3: "The Benefits of Neonato",
      txt4: "The digestive system of ruminants is complex and sensitive, and any imbalances can lead to a range of health issues. Digesto Plus helps to regulate the pH levels in the rumen and prevent acidosis, which can be a common problem for ruminants fed high-grain diets. By promoting a healthy pH balance, this product helps to improve feed efficiency and reduce the risk of digestive disorders.",
      txt5: "",
      txt6: "In addition to its buffering properties, Digesto Plus also contains toxin binders that help to neutralize harmful substances such as mycotoxins. Mycotoxins are toxic substances produced by fungi that can contaminate feed and cause a range of health problems in animals, including reduced feed intake, poor growth, and impaired immune function. The inclusion of toxin binders in Digesto Plus helps to protect animals from the negative effects of mycotoxins and other harmful substances.",
      txt7: "Digesto Plus is a reliable and effective product that is easy to use and can be incorporated into a range of feeding programs. It is specially designed to help keep ruminants healthy and support optimal performance, making it an essential component of any animal nutrition program. With Digesto Plus, you can rest assured that your animals are receiving the support they need to maintain a healthy digestive system and reach their full potential.",
      txt8: "",
      txt9: "",
      txt10: "",
      txt11: "",
      txt12: "",
      txt13: "",
    },
    {
      name: "Micro-Flora",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg5,
      txt1: "Rumeno Micro Flora",
      txt2: "Introducing Rumeno Micro-Flora, a powerful pre+probiotic supplement designed specifically for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.",
      txt3: "",
      txt4: "Our carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.",
      txt5: "",
      txt6: "Unlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.",
      txt7: "Prebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.",
      txt8: "Combining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:",
      txt9: "Improved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.  Enhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.",
      txt10: "",
      txt11:
        "Increased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria. Reduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.   Improved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.    Increased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.    Enhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.   Reduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.",
      txt12: "Natural and safe: Rumen…",
      txt13: "",
    },
    {
      name: "Rumenovita",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg6,
      txt1: "Rumenovita",
      txt2: "Introducing Rumenovita - the ultimate product that is specifically formulated to support fast growth and weight gain in your animals. With its unique blend of high by-pass protein and other key ingredients, Rumenovita provides the ultimate nutritional support to help your animals reach their full potential.",
      txt3: "The Benefits of Neonato",
      txt4: "The high by-pass protein in Rumenovita is carefully selected to ensure that your animals are receiving the highest quality protein sources available. By providing this valuable nutrient in a form that is more easily absorbed by the animal's body, Rumenovita helps to support muscle growth and development, which in turn helps to promote faster weight gain.",
      txt5: "",
      txt6: "In addition to its high-quality protein sources, Rumenovita is also packed with other essential nutrients that are critical for optimal growth and development. These include a carefully balanced blend of vitamins, minerals, and other key nutrients that work together to support your animal's overall health and wellbeing.",
      txt7: "One of the key benefits of Rumenovita is its ability to support healthy digestion in your animals. The unique blend of probiotics, prebiotics, and other digestive enzymes helps to promote a healthy gut environment, which is essential for optimal nutrient absorption and utilization. This means that your animals are able to get the most out of their feed, which can lead to faster growth and weight gain.",
      txt8: "At Rumenovita, we understand the importance of providing your animals with the best possible nutrition. That's why we've developed a product that is specifically designed to support fast growth and weight gain, while also promoting overall health and wellbeing. Whether you're raising cattle, sheep, or other livestock, Rumenovita is the perfect choice for farmers and livestock owners who want to give their animals the best possible chance at success.",
      txt9: "So why wait? Give your animals the nutritional support they need to reach their full potential with Rumenovita. With its high-quality ingredients, proven results, and unbeatable value, Rumenovita is the ultimate choice for fast growth and weight gain in your animals. Try it today and see the difference for yourself!",
      txt10: "",
      txt11: "",
      txt12: "",
      txt13: "",
    },
  ];
    

  const [modalId, setModalId] = React.useState("");
  const handleClose = () => setModalId("");

  return PrdData1.map((card1, i) => {
      
    return (
      <>
          <div className="col-lg-4">
            <div className="card profile-two">
              <div className="card-image profile-img--two">
                <img
                  src={card1.img}
                  alt=""
                />
              </div>

              <ul className="social-icons p-0">
                <li>
                  <a href="#/"  onClick={() => setModalId(`modal${i}`)}>
                  <FontAwesomeIcon icon={faEye} style={{color: "green",}} />
                  </a>
                    <Modal
                  show={modalId === `modal${i}`}
                  onHide={handleClose}
                  aria-labelledby={`${card1.name}ModalLabel`}
                  centered
                  size="xl"
                >
                  <Modal.Header id={`${card1.name}ModalLabel`} closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5">
                          <img src={card1.img} alt="" />
                        </div>
                        <div className="col-lg-6 modal-txt">
                          <h5 className="fw-bolder">{card1.txt1}</h5>
                          <p>{card1.txt2}</p>
                          <h5 className="fw-bolder">{card1.txt3}</h5>
                          <p>{card1.txt4}</p>
                          <h5 className="fw-bolder">{card1.txt5}</h5>
                          <p>{card1.txt6}</p>
                          <p>{card1.txt7}</p>
                          <p>{card1.txt8}</p>
                          <p>{card1.txt9}</p>
                          <h5 className="fw-bolder">{card1.txt10}</h5>
                          <p>{card1.txt11}</p>
                          <h5 className="fw-bolder">{card1.txt12}</h5>
                          <p>{card1.txt13}</p>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                </li>
                <li>
                  <a href="# ">
                  <FontAwesomeIcon icon={faYoutube} style={{color: "green",}} />
                  </a>
                </li>
                <li>
                  <a href="# " >
                  <FontAwesomeIcon icon={faCartShopping}  style={{color: "green",}}/>
                  </a>
                 
                </li>
              </ul>

              <div className="details jane">
                <h2 >
                  {card1.name}
                  <span className="job-title d-block">{card1.price}</span>
                </h2>
              </div>
            </div>
          </div>
      </>
    );
  });
};
export default PrdCard1 ;
