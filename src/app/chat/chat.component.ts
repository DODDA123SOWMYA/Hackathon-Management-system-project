import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  hours: number = 24;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;
  updates = [
    {
      title: 'Exciting Hackathon Results Are In!',
      time: 'October 15, 2023 10:00 AM',
      description:
        'We are thrilled to announce the results of the recent hackathon. After hours of innovative coding and collaboration, our participants have created outstanding projects that redefine the future. Stay tuned to discover the winning teams and their inspiring solutions.',
    },
    {
      title: 'Upcoming Workshop: AI and Machine Learning',
      time: 'October 20, 2023 2:30 PM',
      description:
        "Join us for an upcoming workshop on Artificial Intelligence and Machine Learning. Explore the world of cutting-edge technology, learn from experts, and gain hands-on experience in building intelligent systems. Don't miss this opportunity to enhance your skills.",
    },
    {
      title: 'Hackathon Registration Opens Tomorrow',
      time: 'October 25, 2023 9:00 AM',
      description:
        "Get ready for the ultimate coding challenge! We're excited to announce that registration for the upcoming hackathon opens tomorrow. Gather your team, prepare your ideas, and be the first to secure your spot in this thrilling competition.",
    },
    {
      title: 'Call for Mentors: Share Your Expertise',
      time: 'October 30, 2023 11:45 AM',
      description:
        "We're looking for experienced mentors to guide and inspire our hackathon participants. If you have expertise in coding, design, or any other tech-related field, we invite you to join us. Share your knowledge, support emerging talent, and be part of an incredible learning experience.",
    },
  ];
  dashNo = 1;
  addPost = false;
  reviewStatus = false;
  checkpointPrompt = false;
  teamChat = [
    {
      sender: 'Team Member 1',
      message: "Hi, everyone! I hope you're all doing well.",
      timestamp: '2023-10-26 09:15 AM',
    },
    {
      sender: 'Team Member 2',
      message: "Hello! I'm ready to start working on our project.",
      timestamp: '2023-10-26 09:18 AM',
    },
    {
      sender: 'Team Member 3',
      message: "Good morning! Let's make this hackathon a success.",
      timestamp: '2023-10-26 09:21 AM',
    },
    {
      sender: 'Team Member 1',
      message: "I've got some initial ideas. Shall we discuss them?",
      timestamp: '2023-10-26 09:25 AM',
    },
    {
      sender: 'Team Member 2',
      message: "Sure, I'm all ears. Let's brainstorm!",
      timestamp: '2023-10-26 09:28 AM',
    },
    {
      sender: 'Team Member 3',
      message: 'I think we should focus on sustainability. What do you think?',
      timestamp: '2023-10-26 09:32 AM',
    },
    {
      sender: 'Team Member 1',
      message: "Great idea! Let's explore sustainable solutions.",
      timestamp: '2023-10-26 09:35 AM',
    },
    {
      sender: 'Team Member 2',
      message: 'I found some interesting research on renewable energy sources.',
      timestamp: '2023-10-26 09:38 AM',
    },
    {
      sender: 'Team Member 1',
      message: "That's fantastic! Share the links, and we'll dive in.",
      timestamp: '2023-10-26 09:42 AM',
    },
    {
      sender: 'Team Member 3',
      message: "Let's meet again tomorrow to discuss our progress.",
      timestamp: '2023-10-26 09:45 AM',
    },
    {
      sender: 'Team Member 2',
      message: 'Sounds like a plan. See you all tomorrow!',
      timestamp: '2023-10-26 09:49 AM',
    },
  ];
  teamMem = [
    {
      name: 'Team member 1',
    },
    {
      name: 'Team member 2',
    },
    {
      name: 'Team member 3',
    },
  ];
  juryCriteria = [
    {
      name: 'Market Opportunity',
    },
    {
      name: 'Solution Innovation',
    },
    {
      name: 'Value Proposition',
    },
    {
      name: 'Business Model',
    },
    {
      name: 'Team Expertise',
    },
    {
      name: 'Risk Assessment',
    },
    {
      name: 'Presentation and Pitch',
    },
  ];
  teamData = [
    {
      imgSrc: 'assets/archons.jpg',
      likeStatus: '',
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ND_AjF_KTD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      teamName: 'Innovators United',
      teamMembers: {
        member1: 'siri',
        member2: 'poojitha',
        member3: 'varshitha',
      },
      description:
        'A cloud-based project management platform that simplifies task tracking and team collaboration for businesses of all sizes.',
      problemSolving:
        'Addresses the challenge of project management inefficiencies, delayed timelines, and poor collaboration in modern workplaces.',
      solution:
        'Features real-time task tracking, document sharing, and interactive Gantt charts. Integrates with popular project management tools.',
      valueProposition:
        'Boost productivity, meet project deadlines, and improve collaboration with our intuitive and affordable project management solution.',
    },
    {
      imgSrc: 'assets/codechefs.jpg',
      likeStatus: '',
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/y6NfxiemvHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      teamName: 'Tech Explorers',
      teamMembers: {
        member1: 'Anvitha',
        member2: 'Divya',
        member3: 'kavya',
      },
      description:
        'An AI-powered HR software that streamlines the recruitment and employee management processes for businesses.',
      problemSolving:
        'Addresses the challenges of time-consuming candidate screening and inefficient employee onboarding procedures.',
      solution:
        'Automates candidate screening, offers HR analytics, and simplifies onboarding with a user-friendly interface.',
      valueProposition:
        'Save time and resources in HR tasks, improve hiring decisions, and enhance the employee experience with our AI-driven HR software.',
    },
    {
      imgSrc: 'assets/codecrafters.jpg',
      likeStatus: '',
      videoSrc: '',
      teamName: 'Healthcare Heroes',
      teamMembers: {
        member1: 'Jaggu',
        member2: 'Lasya',
        member3: 'Ajay',
      },
      description:
        'A cloud-based marketing automation platform that helps businesses create, launch, and analyze marketing campaigns.',
      problemSolving:
        'Addresses the challenge of manual campaign management, poor ROI tracking, and fragmented customer data.',
      solution:
        'Offers email marketing, social media scheduling, and detailed campaign analytics in one platform.',
      valueProposition:
        'Drive better marketing results, save time, and grow your customer base with our all-in-one marketing automation solution.',
    },
    {
      imgSrc: 'assets/powerhouse.jpg',
      likeStatus: '',
      videoSrc: '',
      teamName: 'EcoWarriors',
      teamMembers: {
        member1: 'Prabhas',
        member2: 'Virat',
        member3: 'Vijay talapathi',
      },
      description:
        'A SaaS solution for remote team collaboration, combining video conferencing, project management, and file sharing.',
      problemSolving:
        'Addresses the challenges of remote work, disconnected teams, and inefficient collaboration tools.',
      solution:
        'Enables video meetings, document sharing, task assignments, and team chat in one integrated platform.',
      valueProposition:
        'Improve team collaboration, enhance productivity, and streamline remote work with our all-in-one collaboration software.',
    },
  ];
  checkpointData = [
    {
      "title": "Checkpoint 1",
      "description": "Complete initial project setup",
      "deadline": "2023-11-05 08:00:00"
    },
    {
      "title": "Checkpoint 2",
      "description": "Develop core features",
      "deadline": "2023-11-12 08:00:00"
    },
    {
      "title": "Checkpoint 3",
      "description": "Implement user authentication",
      "deadline": "2023-11-19 08:00:00"
    }
  ]
  selectedPost: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        clearInterval(this.intervalId);
      } else {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            this.hours--;
            this.minutes = 59;
          } else {
            this.minutes--;
          }
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }
    }, 1000);
  }

  openReviewPopup(post: any) {
    this.selectedPost = post;
    this.reviewStatus = true;
  }

  closeReviewPopup() {
    this.selectedPost = null;
    this.reviewStatus = false;
  }

  changeBackgroundColor(team: any) {
    if (team.likeStatus == '') {
      team.likeStatus = 'rgb(237, 181, 70)';
    } else {
      team.likeStatus = '';
    }
  }
}