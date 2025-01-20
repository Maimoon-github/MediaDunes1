import React from 'react';
import './Images.css';

// Array of placeholder images. Replace these URLs with your own images if needed.
const images = [
  'https://media.licdn.com/dms/image/D4D12AQE9Ej3zzHizng/article-cover_image-shrink_720_1280/0/1682430843912?e=2147483647&v=beta&t=MssPXwxyN6kJ-asWA-V4V6By7livzUR9O4X4yiQqIRA',
  'https://i.pinimg.com/474x/3a/eb/4c/3aeb4c5781ccd9a3e9f6a6f5afd2eb35.jpg',
  'https://images.dmnews.com/wp-content/uploads/2024/05/Adapting-Graphic.jpg.webp',
  'https://media.licdn.com/dms/image/D5612AQGD0rReXVubSQ/article-cover_image-shrink_720_1280/0/1707735835502?e=2147483647&v=beta&t=nVdoWbJ_zh4MzbuW90bbNclzXa_g5DvjO0XeN6v5WQg',
  'https://media.licdn.com/dms/image/D4D12AQE9Ej3zzHizng/article-cover_image-shrink_720_1280/0/1682430843912?e=2147483647&v=beta&t=MssPXwxyN6kJ-asWA-V4V6By7livzUR9O4X4yiQqIRA',
  'https://xphotography.ca/wp-content/uploads/2024/01/Acid_Graphics_illustration_design_sense_of_design_middle.jpg',
  'https://sunshinedesign.com.au/wp-content/uploads/2023/02/stufly_graphic_design_colourful_birds_exploding_out_powder_99bdc5ea-e29b-4c0a-986e-e9f557fdc032-1024x675.png',
  'https://www.devstars.com/wp-content/uploads/2023/02/stuart_visual_representation_of_the_future_of_graphic_design_wi_35d8b2a5-a224-4063-8239-359e0ffe4ccd-1-1024x512.jpg',
  'https://vowels.ae/wp-content/uploads/2023/05/types-of-graphic-designs-900x636.jpg',
  'https://media.licdn.com/dms/image/D4D12AQE9Ej3zzHizng/article-cover_image-shrink_720_1280/0/1682430843912?e=2147483647&v=beta&t=MssPXwxyN6kJ-asWA-V4V6By7livzUR9O4X4yiQqIRA',
  'https://wetech.co.za/wp-content/uploads/2022/09/graphic-design.jpg',
  'https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/64745d3996040b5fe4e8f22f_Freelance%20Graphic%20Designer%20Business%20Plan%20Example.png',
  'https://vowels.ae/wp-content/uploads/2023/05/types-of-graphic-designs-900x636.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFeo8d2ym2ByelGHU4P4gxo9-Yy9cQ4zZHIm4oY3RMRjUaGEZH2r0teLvrMvtO8HRLko&usqp=CAU ',
  'https://media.licdn.com/dms/image/D4D12AQE9Ej3zzHizng/article-cover_image-shrink_720_1280/0/1682430843912?e=2147483647&v=beta&t=MssPXwxyN6kJ-asWA-V4V6By7livzUR9O4X4yiQqIRA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFeo8d2ym2ByelGHU4P4gxo9-Yy9cQ4zZHIm4oY3RMRjUaGEZH2r0teLvrMvtO8HRLko&usqp=CAU',
  'https://wetech.co.za/wp-content/uploads/2022/09/graphic-design.jpg',
  'https://vowels.ae/wp-content/uploads/2023/05/types-of-graphic-designs-900x636.jpg',
  'https://vowels.ae/wp-content/uploads/2023/05/types-of-graphic-designs-900x636.jpg',
];

const ImageGrid = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="custom-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
