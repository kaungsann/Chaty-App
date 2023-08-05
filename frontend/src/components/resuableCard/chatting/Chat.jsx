import React, { useRef, useState } from "react";
import {
  BiSearch,
  BiDotsHorizontalRounded,
  BiSolidMicrophone,
  BiSolidVolumeMute,
} from "react-icons/bi";
BiSolidVolumeMute;
import { TiAttachmentOutline } from "react-icons/ti";
import { BsSendFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import img from "../../../assets/images.jpeg";
import chatting from "./chat.module.css";

export default function Chat() {
  const [show, setShow] = useState(false);
  const fileInputRef = useRef(null);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    console.log(file);
  };

  return (
    <>
      <div className={chatting.chatContainer}>
        <div className={chatting.Title}>
          <div className={chatting.titleBox}>
            <img src={img} className={chatting.img} />
            <div className={chatting.nameBox}>
              <span className={chatting.name}>Doris Brown</span>
              <span className={chatting.online}>Online</span>
            </div>
          </div>
          <div className={chatting.iconsBox}>
            <BiSearch className={chatting.icon} />
            <AiOutlineUser className={chatting.icon} />

            <div className={chatting.detail}>
              <FaPhoneAlt className={chatting.icon} />
              <BiDotsHorizontalRounded
                className={chatting.icon}
                onClick={() => setShow(!show)}
              />
              {show && (
                <div className={chatting.showBox}>
                  <div className={chatting.Show} onClick={() => setShow(!show)}>
                    <span className={chatting.boxText}>Mute</span>
                    <span>
                      <BiSolidVolumeMute className={chatting.mute} />
                    </span>
                  </div>
                  <div className={chatting.Show} onClick={() => setShow(!show)}>
                    <span className={chatting.boxText}>Delete</span>
                    <span>
                      <RiDeleteBin6Line className={chatting.mute} />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={chatting.viewMsg}>
          <h1>message</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic
            dignissimos error totam exercitationem eaque temporibus porro ipsam
            voluptas nulla reprehenderit modi corporis deleniti at, quis et
            nostrum dolor perferendis, perspiciatis veritatis voluptate. Aliquid
            aperiam hic non enim. Ducimus, dicta sit culpa aut quam ab illum
            tenetur repellat dolorem ea voluptatibus deserunt corporis nihil,
            nobis iure pariatur non maiores distinctio dignissimos. Harum, nobis
            facere nisi architecto ipsam fuga consectetur numquam soluta officia
            temporibus suscipit atque pariatur iusto optio sequi id eveniet,
            totam qui quam dolores aut adipisci et vitae? Consectetur eos libero
            fugit, ad ex hic excepturi, minus laborum blanditiis qui id, fuga
            non? Vel, rem ad, dolorum odio expedita, nemo delectus suscipit
            veniam magni libero ab. Maiores cum, hic nam magnam reprehenderit
            facere odio laboriosam dolore voluptatibus necessitatibus libero
            voluptas nesciunt veniam voluptatum. Vel quisquam in, qui sit
            necessitatibus natus, reprehenderit rem ipsam id unde animi eveniet,
            excepturi autem assumenda. Harum consectetur saepe beatae ducimus
            perferendis dolores animi praesentium aliquid rem vitae nostrum
            nihil esse, quis culpa possimus error cupiditate sequi dolore
            aliquam veniam quaerat libero! Nesciunt facere natus enim?
            Obcaecati, modi ab laboriosam quam dolorem cum iure itaque deserunt
            fugit quod vero, odit excepturi! Fugit atque molestiae aliquam
            tempora quae eum maxime ipsam natus voluptatem, amet, ex deserunt
            laudantium nobis rem facere ducimus molestias ullam libero similique
            debitis! Vero beatae sapiente incidunt neque et iste saepe, eveniet
            dolor itaque, sit soluta autem omnis cum reiciendis ipsum laudantium
            quod impedit. Ex est, quisquam maiores veritatis autem molestias
            minima, vel aut voluptatibus asperiores doloremque iure quam nulla a
            molestiae. Odio obcaecati quos quidem quaerat doloremque aspernatur,
            odit minima molestias tempore architecto at blanditiis nihil ea
            distinctio quasi aperiam sequi? Debitis ipsam quasi expedita, culpa,
            fugiat beatae voluptatum modi hic molestiae, nihil at sit officia
            soluta itaque aliquid nisi. Sed ipsam omnis fuga temporibus autem
            at, voluptatum, commodi ex culpa provident error, quaerat similique.
            Quas laborum sequi doloribus ipsam quidem voluptates omnis illo
            ipsum assumenda distinctio, deleniti eligendi voluptatum et ea ad.
            Harum ipsum possimus dolor, eaque ut, quas quaerat commodi nihil
            perspiciatis dolore provident laboriosam qui placeat nemo ab,
            accusamus expedita quo sit sed? Nemo quod, aliquid mollitia optio
            numquam placeat nobis fugit vero alias quae aperiam impedit error
            possimus unde culpa provident facere nesciunt voluptate at vitae
            sunt pariatur fuga laudantium quaerat! Fugit doloribus minus id
            repellat ipsam, perspiciatis nemo officiis voluptatum dolor nostrum
            corrupti iure consequuntur esse quis a assumenda accusantium natus
            reprehenderit beatae tempore! Facere iusto est maxime corrupti a
            odit iste itaque ducimus perferendis eum, necessitatibus illum,
            aliquam voluptatum neque qui eligendi accusamus fugit. Adipisci amet
            praesentium iusto exercitationem deleniti similique ipsam corrupti
            voluptates ipsa aliquam reprehenderit est asperiores expedita
            voluptatem sunt eos, architecto, modi, nesciunt tempora. Ab
            aspernatur fugiat quod, quos eum porro, libero debitis deserunt
            minima cum, aut hic voluptatibus asperiores atque rem. Eligendi
            minima temporibus, sint porro, quas, ut vel suscipit esse quia
            corrupti cumque tenetur dicta corporis alias qui deserunt eius
            dolorem error quae similique. Enim dolorum soluta explicabo, dolor
            quam rerum.
          </p>
        </div>
        <div className={chatting.postBox}>
          <div className={chatting.storeBox}>
            <div>
              <GrEmoji className={chatting.emoji} />
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
              <TiAttachmentOutline
                className={chatting.emoji}
                onClick={handleFileInputClick}
              />
            </div>
            <div className={chatting.inputBox}>
              <input
                type="text"
                className={chatting.texting}
                placeholder="Enter Message ... "
              />
            </div>
            <div>
              <BiSolidMicrophone className={chatting.emoji} />
              <BsSendFill className={chatting.send} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
