import React from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";

interface Service {
  title: string;
  longDescription: string;
  images: string[];
}

interface ServicePopupProps {
  service: Service;
  onClose: () => void;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ service, onClose }) => {
  const renderMediaContent = (url: string, index: number) => {
    const fileExtension = url.split('.').pop()?.toLowerCase();
    
    if (fileExtension === 'mp4' || fileExtension === 'gif') {
      return (
        <video
          key={index}
          src={url}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg object-cover w-full h-full"
        />
      );
    } else {
      return (
        <Image
          key={index}
          src={url}
          alt={`${service.title} image ${index + 1}`}
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
      );
    }
  };

  const popupContent = (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 m-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-200">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.longDescription}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {service.images.map((url, index) => renderMediaContent(url, index))}
        </div>
        <button
          onClick={onClose}
          className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(popupContent, document.body);
};

export default ServicePopup;
