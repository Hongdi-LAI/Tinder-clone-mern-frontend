import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo! What's Up?"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTMzODg1NDUx/mark-dean.jpg"
      />

      <Chat
        name="Ellen"
        message="What's up"
        timestamp="55 minutes ago"
        profilePic="data:image/jpeg;base64,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"
      />

      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://prabook.com/web/show-photo-icon.jpg?id=1878929&width=220&cache=false"
      />

      <Chat
        name="Natasha"
        message="There he is..."
        timestamp="2 weeks ago"
        profilePic="https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_07_decembre_2015.2Fnatasha-st-pier.2F3472731-1-fre-FR.2Fnatasha-st-pier.2Ejpg/480x480/quality/80/natasha-st-pier-devoile-une-photo-de-son-bebe.jpg"
      />
    </div>
  );
}

export default Chats;