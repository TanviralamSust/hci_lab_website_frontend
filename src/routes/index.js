import Projects from '../components/projects/Projects';
import Members from '../components/members/Members';
import Notices from '../components/notices/Notices';
import Home from '../components/home/Home';

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
        path : '/members',
        component: Members
    },
    {
        path : '/notices',
        component: Notices
    },

]