import Projects from '../components/projects/Projects';
import CreateProject from '../components/projects/CreateProject';
import Members from '../components/members/Members';
import Notices from '../components/notices/Notices';
import Home from '../components/home/Home';
import CreateMember from '../components/members/CreateMember'
import CreateNotice from "../components/notices/CreateNotice";
import Achievements from "../components/achievements/Achievements";
import CreateAchievement from "../components/achievements/CreateAchievement";

export const routes = [
    {
        path : '',
        component : Home
    },
    {
        path : '/projects',
        component: Projects
    },
    {
        path : '/projects/addProject',
        component: CreateProject
    },
    {
        path : '/members',
        component: Members
    },
    {
        path : '/members/addMember',
        component: CreateMember
    },
    {
        path : '/notices',
        component: Notices
    },
    {
        path : '/notices/addNotice',
        component: CreateNotice
    },
    {
      path : '/achievements',
      component: Achievements
    },
    {
      path : '/achievements/addAchievement',
      component: CreateAchievement
    },

]
