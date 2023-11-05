"use client";
import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, EmailShareButton } from 'next-share';

interface ShareButtonsProps {
    slug: string;
}

export const ShareButtonsFallback = () => null;

const ShareButtons: React.FC<ShareButtonsProps> = ({ slug }) => {
    
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.carnaval-radio.nl";
    
    return (
        <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold">Share:</h3>
        <div className="flex space-x-4 items-center">
          {/* facebook site */}
          <FacebookShareButton
            url={`${siteBaseUrl}/articles/${slug}`}
          >
            <FaFacebook className="text-3xl text-blue-500" />
          </FacebookShareButton>

          {/* whatsapp */}
          <WhatsappShareButton
            url={`${siteBaseUrl}/articles/${slug}`}
          >
            <FaWhatsapp className="text-3xl text-green" />
          </WhatsappShareButton>
          {/* Twitter */}
          <TwitterShareButton
            url={`${siteBaseUrl}/articles/${slug}`}
            title={"WSSCs"}
          >
            <FaTwitter className="text-3xl text-blue-400" />
          </TwitterShareButton>
          {/* email */}
          <EmailShareButton
            url={`${siteBaseUrl}/articles/${slug}`}
            subject={`Carnaval Radio Nieuwsbericht ${slug}`}
            body={
              "Hier een leuk artikel van Carnaval Radio, lees het eens en luister mee!"
            }
          >
            <HiMail className="text-4xl text-red-500" />
          </EmailShareButton>
        </div>
      </div>
    );
};

export default ShareButtons;
