const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow only your Vercel frontend to access the backend
const allowedOrigins = ['https://mentorx-space.vercel.app'];

app.use(cors({
  origin: "https://mentorx-space.vercel.app", // my frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get('/api/courses', (req, res) => {
  res.json([
    {
      id: "course1",
      title: "Photography Basics",
      description: "Learn how to capture stunning images with your DSLR or smartphone.",
      videos: [
        {
          id: "vid1",
          title: "Introduction to Cameras",
          url: "https://www.youtube.com/watch?v=ixRKeQMa7Nc",
          thumbnailUrl: "https://img.youtube.com/vi/ixRKeQMa7Nc/0.jpg"
        },
        {
          id: "vid2",
          title: "Camera Settings Explained",
          url: "https://www.youtube.com/watch?v=Edvpu_939l4",
          thumbnailUrl: "https://img.youtube.com/vi/Edvpu_939l4/0.jpg"
        }
      ]
    },
    {
      id: "course2",
      title: "Lighting Techniques",
      description: "Master the art of lighting for indoor and outdoor shoots.",
      videos: [
        {
          id: "vid1",
          title: "Natural Light Photography",
          url: "https://www.youtube.com/watch?v=c7gpFQwtF68",
          thumbnailUrl: "https://img.youtube.com/vi/c7gpFQwtF68/0.jpg"
        },
        {
          id: "vid2",
          title: "Using Reflectors and Diffusers",
          url: "https://www.youtube.com/watch?v=qoQ4_W3ogFg",
          thumbnailUrl: "https://img.youtube.com/vi/qoQ4_W3ogFg/0.jpg"
        }
      ]
    },
    {
      id: "course3",
      title: "Photo Editing Essentials",
      description: "Learn post-processing using Lightroom, Photoshop, and mobile apps.",
      videos: [
        {
          id: "vid1",
          title: "Editing with Lightroom",
          url: "https://www.youtube.com/watch?v=owStZxm9DIA",
          thumbnailUrl: "https://img.youtube.com/vi/owStZxm9DIA/0.jpg"
        },
        {
          id: "vid2",
          title: "Photoshop Retouching Basics",
          url: "https://www.youtube.com/watch?v=fsd2NUfJkNw",
          thumbnailUrl: "https://img.youtube.com/vi/fsd2NUfJkNw/0.jpg"
        },
        {
          id: "vid3",
          title: "Editing on Mobile",
          url: "https://www.youtube.com/watch?v=4h17wHQ1sVc",
          thumbnailUrl: "https://img.youtube.com/vi/4h17wHQ1sVc/0.jpg"
        }
      ]
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
