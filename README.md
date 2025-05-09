# knowify.dev

**Organize, visualize, and gain insights from your personal knowledge.**

Knowify.dev is a web application designed to help you build a structured and interconnected personal knowledge map. Moving beyond simple note-taking, it allows you to create "nodes" of information (like people, books, concepts, or locations) and link them together. This enables diverse visualizations such as taxonomies, mind maps, timelines, and geographical maps, helping you uncover new connections and understand your knowledge in new ways.

The platform leverages Google's Gemini AI to enhance content, suggest learning paths, offer serendipitous discoveries, and provide debiased knowledge suggestions.

The product will be available on [knowify.dev](https://knowify.dev) soon.

## ✨ Key Features

* **Node-Based Knowledge Mapping**: Construct your knowledge base by creating and interlinking "nodes." 
* **Specialized Node Types**: Predefined fields for various information types (e.g., Books, People, Locations, Concepts) with the ability to create custom subtypes. 
* **Diverse Visualizations**:
    * Taxonomies (hierarchical topics) 
    * Mind Maps (network view) 
    * Timelines (chronological data) 
    * Geographical Maps (location-based data) 
* **Interactive & Customizable Views**: Click, filter, and group data within visualizations. 
* **AI-Powered Enhancements (via Gemini AI)**:
    * Content enrichment (e.g., auto-populating book details). 
    * Deep insights and connection identification. 
    * Personalized knowledge suggestions and learning journeys. 
    * Serendipitous discovery of tangential connections. 
    * Debiased knowledge suggestions, offering differing views. 
* **Streamlined Workflow**: Quick-add features and AI-assisted data population. 

## 🎯 Project Goals

* Provide a structured yet flexible environment for personal knowledge management. 
* Enable users to visualize their knowledge in multiple ways to uncover new connections and insights. 
* Offer a personalized learning journey with AI-driven suggestions. 
* Serve as a practical learning opportunity for developing scalable applications on Google Cloud. 

## 🛠️ Tech Stack

This project is being built with a focus on leveraging Google Cloud technologies.

* **Frontend**: React (with TypeScript) 
    * State Management: (e.g., Redux Toolkit, Zustand, or React Context API - TBD) 
    * Styling: (e.g., CSS Modules, Styled-components, or Tailwind CSS - TBD) 
    * Visualization Libraries: (e.g., vis.js, React Flow, D3.js, Google Maps Platform API - TBD based on specific needs) 
* **Backend**: Node.js with TypeScript (likely Express.js or NestJS) 
* **Database**: Google Cloud Firestore 
* **AI Integration**: Google Cloud Vertex AI + Gemini API 
* **Hosting**:
    * Frontend: Firebase Hosting 
    * Backend: Google Cloud Run 
* **Authentication**: Firebase Authentication 
* **CI/CD**: Google Cloud Build 
* **Other Google Cloud Services**: Container Registry, Cloud Logging & Monitoring, Secret Manager. 

## 🚀 Current Status

* **Phase 0: Foundation & Setup - In Progress.** 
* Currently focusing on finalizing the tech stack, Google Cloud Platform (GCP) project setup, core data modeling for Firestore, and establishing the basic development environments and CI/CD pipeline structure.

## 🗺️ Project Roadmap

1.  **Phase 0-1: Foundation & Core MVP**: Basic authentication, CRUD for generic nodes, simple list/network visualization. 
2.  **Phase 2: Specialized Nodes & Visualizations**: Implement all core node types, Topic taxonomy, improved Mind Map. 
3.  **Phase 3: Advanced Visualizations & AI Core**: Timeline, Geo Map, initial AI document enrichment. 
4.  **Phase 4: AI Enhancements & UX Refinement**: AI insights, knowledge suggestions, UI/UX polish. 
5.  **Phase 5: Beta Testing, Deployment & Iteration**. 

## 📜 License

License TBD.

---

Built by jamessexton-io
