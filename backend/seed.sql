-- Profile
INSERT INTO profile (name, email, education, github, linkedin, achievement)
VALUES (
  'Lakavath Raghuram',
  'lakavathraghuram28@gmail.com',
  'B.Tech Computer Science and Engineering, IIIT Kottayam (2022–2026), GPA: 7.64/10',
  'https://github.com/LAKAVATHRAGHURAM',
  'https://www.linkedin.com/in/lakavath-raghuram-58268529a/',
  'GATE 2025 Qualified – Data Science & Artificial Intelligence'
);

-- Skills
INSERT INTO skills (profile_id, skill_name, proficiency) VALUES
(1, 'C/C++', 90),
(1, 'Python', 95),
(1, 'Java', 80),
(1, 'JavaScript', 85),
(1, 'HTML/CSS', 85),
(1, 'SQL', 80),
(1, 'Machine Learning', 90),
(1, 'Deep Learning', 85),
(1, 'Computer Vision', 80),
(1, 'React', 80),
(1, 'Node.js', 75);

-- Projects
INSERT INTO projects (profile_id, title, description, links, skills_text) VALUES
(1, 'Cotton Plant Disease Classification',
   'Developed a deep learning model in TensorFlow to accurately predict cotton plant diseases from leaf images, leveraging advanced convolutional neural network (CNN) architectures for high-precision classification. The project involved extensive dataset preprocessing, including image normalization, resizing, and noise reduction, along with augmentation techniques such as rotation, flipping, and contrast adjustment to enhance model generalization across diverse environmental conditions. Additionally, optimized training efficiency through carefully designed data processing pipelines, hyperparameter tuning, and early stopping, ensuring robust performance and scalability for real-world agricultural applications aimed at supporting farmers with timely and reliable disease diagnosis.',
   '["https://github.com/LAKAVATHRAGHURAM"]',
   'Python, TensorFlow, Keras, NumPy, Pandas'),

(1, 'Fake News Detection System',
   'Built a deep learning NLP model using TensorFlow and deployed it through a Flask API to classify news articles as real or fake in real time, further integrating the solution with a Chrome Extension for seamless user interaction and instant verification while browsing. The project involved comprehensive text preprocessing steps such as stopword removal, stemming, lemmatization, tokenization, and vectorization (TF-IDF and word embeddings) to capture semantic meaning and contextual patterns from diverse news datasets. Extensive experimentation with model architectures and hyperparameter tuning was carried out to improve accuracy, robustness, and generalization across multiple sources and writing styles. The end-to-end system not only provides reliable fake news detection but also demonstrates scalable deployment of deep learning models in real-world web applications for enhanced user trust and awareness.',
   '["https://github.com/LAKAVATHRAGHURAM/Fake-News-Detection-using-TensorFlow-Flask"]',
   'Python, TensorFlow, Flask, NLP'),

(1, 'Abroad Dream',
   'Developed a full-stack web platform to simplify and streamline the study-abroad process by providing students with an intuitive interface to search universities, explore academic programs, and manage their applications efficiently in one place. The platform was designed with a scalable backend to handle large datasets of universities and courses, and an interactive frontend for seamless navigation and personalized recommendations based on student profiles and preferences. Key features included advanced search and filter options, program comparisons, application tracking, and document management, ensuring a smooth end-to-end experience for students. Additionally, integrated secure authentication, responsive design, and optimized database queries to enhance usability, performance, and accessibility across devices, ultimately helping students make informed decisions and manage their study-abroad journey with greater ease.',
   '["https://github.com/Software-Engineering-Project588/frontend"]',
   'React, Node.js, Express, MongoDB'),

(1, 'Fraud Detection System',
   'Built a robust fraud detection system using XGBoost to accurately identify fraudulent transactions in highly imbalanced financial datasets, ensuring both precision and scalability for real-world deployment. To address class imbalance challenges, applied Synthetic Minority Oversampling Technique (SMOTE) for generating synthetic samples of minority classes, significantly improving model sensitivity to rare fraudulent cases. The solution incorporated extensive data preprocessing, feature engineering, and hyperparameter tuning to enhance predictive power and minimize false positives. Furthermore, the system was optimized for real-time prediction capability, enabling instant detection and prevention of suspicious activities in financial workflows. This project not only demonstrated advanced machine learning techniques for anomaly detection but also highlighted their critical application in enhancing security and trust in digital financial ecosystems.',
   '["https://github.com/LAKAVATHRAGHURAM/Fraud-Detection-using-XGBoost-and-SMOTE"]',
   'Python, XGBoost, SMOTE, Scikit-learn');

-- Work / Experience
INSERT INTO work (profile_id, role, company, start_date, end_date, description) VALUES
(1, 'Research Intern', 'IIT Hyderabad', '2025-05-01', '2025-07-31',
   'ContextVLM+ is a scalable vision-language system designed to recognize 30 diverse driving scenarios by leveraging the ViLT transformer architecture with natural language prompts. To ensure robust zero-shot and few-shot learning with minimal labeled data, it integrates Low-Rank Adaptation (LoRA) and Monte Carlo (MC) Dropout techniques. Additionally, uncertainty-aware inference methods were developed to enhance safety and improve the generalizability of driving context classification.'),

(1, 'IIoT Intern', 'NITW-Siemens', '2024-05-01', '2024-06-30',
   'Implemented advanced automation solutions in the laboratory using Siemens TIA Portal PLCs, industrial sensors, and actuators to enhance industrial process control efficiency, while also developing data acquisition and visualization pipelines to monitor factory operations and improve performance. Additionally, collaborated with cross-functional teams to enable IIoT integration in energy and instrumentation applications. '),

(1, 'Machine Learning Intern', 'Mentorness', '2024-01-01', '2024-02-28',
   'Managed end-to-end machine learning pipelines encompassing extensive data preprocessing, advanced feature engineering, and regression model deployment in daily operational workflows, applying predictive modeling strategies to significantly improve model accuracy and enhance overall workflow efficiency in real-world business and technical applications.');
