import React from "react";
import Navigation from "./Navigation";

function Academics() {
  return (
    <div className="Color">
      <div>
        <Navigation></Navigation>
      </div>
      <div>
        <img src="./images/school.jpeg"></img>
      </div>
      <p>
        We believe that a rigorous academic program combined with a supportive
        social-emotional curriculum leads to scholar success. TBCSC's academic
        program reflects the practices that are associated with high-performing
        urban schools: more time on task; standards-based instruction;
        research-based curricula; regular assessments; nightly homework; and
        horizon-broadening enrichment opportunities.
      </p>
      <div class="para">
        <p>
          <strong>More Time on Task:</strong> TBCSC scholars spend approximately
          20% more time in school than other NYC public school scholars.
          <li>
            The elementary school day is from 8:00 am-4:00 pm and the middle
            school schedule is from 8:30 am - 4:30 pm, allowing for increased
            time on task for scholar learning.
          </li>
        </p>
        <p>
          <strong>Standards-Based Instruction:</strong> TBCSC uses the Common
          Core to ensure high quality instruction.
          <li>
            Grade - level teams and support team members collaborate regularly
            to map TBCSC's curriculum, benchmark it against standards, and drive
            instructional decision-making in a rigorous, meaningful way.
          </li>
        </p>
        <p>
          <strong>Research-Based Curricula:</strong> TBCSC adopts resources that
          have proven success with similar populations of scholars. <br />
          <strong>Nightly Homework:</strong> Regular homework is essential to
          mastering content and developing strong study habits.
          <li>
            Scholars receive developmentally appropriate homework on a nightly
            basis to reinforce skills and develop study skills
          </li>
          <li>
            Homework is checked on a daily basis and families are kept apprised
            of scholar success through phone calls and written logs.
          </li>
        </p>
        <p>
          <strong>Continuous Assessment:</strong> Regular analysis of and
          reflection on scholar progress is central to TBCSC's culture and to
          achieving our mission.
        </p>
        <li>
          An Assessment Coordinator leads assessment implementation and data
          collection efforts to ensure data-drive instruction;
        </li>
        <li>
          All scholars will take four interim assessments in Reading, Writing
          and Math each year to gauge progress towards grade-level standards;
        </li>
      </div>
    </div>
  );
}

export default Academics;
