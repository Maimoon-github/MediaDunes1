import React from "react";
import "./Remotesoftware.css";

// Import SVGs
import CostsIcon from "../../Assets/Remotesoftware/AS-1 1.svg";
import TeamIcon from "../../Assets/Remotesoftware/AS-2 1.svg";
import ExpertiseIcon from "../../Assets/Remotesoftware/AS-3 1.svg";
import DeliverablesIcon from "../../Assets/Remotesoftware/AS-4 1.svg";

const RemoteTeamsChallenges = () => {
  const challenges = [
    {
      title: "Reducing software development costs",
      description:
        "The in-house project team requires extra expenses that include rent, infrastructure, insurance, bonuses, and more. We'll manage your overheads while you focus on your product's success.",
      icon: CostsIcon,
    },
    {
      title: "Augmenting your team",
      description:
        "Scale your team in a cost-effective way. Not only do we build a full-cycle dedicated development team but also match our designers and engineers to the existing teams of yours to ensure you cover your project challenges.",
      icon: TeamIcon,
    },
    {
      title: "Gaining specific expertise",
      description:
        "If you need to leverage your in-house resources with specific expertise – frontend, backend development, QA, or UX/UI design, we are ready to apply the best practices around major domains.",
      icon: ExpertiseIcon,
    },
    {
      title: "Controlling your project deliverables",
      description:
        "After you start working with our team, you can be sure they'll be available as long as you need them, from phase 0 to the support stage, maximizing your project's profits, as needed.",
      icon: DeliverablesIcon,
    },
  ];

  return (
    <div className="remote-teams-container">
      <h2>Challenges that we help to address with remote teams</h2>
      <p className="description">
        The Agente team delivers solutions that meet our customers’ requirements and goals within the established deadlines. React.js helps us connect design and backend to make your app work as intended.
      </p>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <img src={challenge.icon} alt={challenge.title} className="icon" />
            <div className="text-content">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteTeamsChallenges;
