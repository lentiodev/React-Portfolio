import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import './Projects.css';

const projects = [
  {
    title: 'README Generator',
    description: 'This is a command-line application that generates a professional README.md file for a new project. ',
    image: 'https://github.com/monicarangel95/ReadMe-Generator/blob/master/utils/Demo_Pic.png?raw=true',
    github: 'https://github.com/lentiodev/readme-generator',
    link: 'https://github.com/lentiodev/readme-generator'
  },
  {
    title: 'Weather Dashboard',
    description: 'I create a weather dashboard that will present the user with todays current weather data and then a future five day forecast.',
    image: 'https://user-images.githubusercontent.com/79658534/203655398-108d338f-ecba-4783-9c33-946247704434.png',
    github: 'https://github.com/lentiodev/Weather-Dashboard',
    link: 'https://lentiodev.github.io/Weather-Dashboard/'
  },
  {
    title: 'Daily Planner App',
    description: 'I create an application uses jQuery, bootstrap, and moment.js that allows a user to save events for each hour of the day. ',
    image: 'https://github.com/nick75mowbray/day_planner/blob/master/screenshots/desktop.jpg?raw=true',
    github: 'https://github.com/lentiodev/Daily-Planner-App',
    link: 'https://lentiodev.github.io/Daily-Planner-App/'
  },
  {
    title: 'Coding Quiz',
    description: 'In this JavaScript quiz once you click the start button you will be presented with a series of multiple choice questions and you have only 165 seconds to finish.',
    image: 'https://github.com/lentiodev/Coding-Quiz/blob/main/assets/img/Screenshot1.png?raw=true',
    github: 'https://github.com/lentiodev/Coding-Quiz',
    link: 'https://lentiodev.github.io/Coding-Quiz/'
  },
  {
    title: 'Password Generator',
    description: 'I create an application that everyone can use to generate a random password based on criteria they’ve selected.',
    image: 'https://github.com/lentiodev/Password-Generator/blob/main/assets/javascript-challenge.png?raw=true',
    github: 'https://github.com/lentiodev/Password-Generator',
    link: 'https://lentiodev.github.io/Password-Generator/'
  },
  {
    title: 'Console Finances',
    description: 'I created code for analysing the financial records of a company.',
    image: 'https://user-images.githubusercontent.com/92191429/211598951-b4980336-0676-4d3e-a373-9fdb50e27d91.png',
    github: 'https://github.com/lentiodev/Console-Finances',
    link: 'https://lentiodev.github.io/Console-Finances/'
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <Grid item xs={12}>
        <Typography variant="h1" align="center" gutterBottom>
          My Projects
        </Typography>
        </Grid>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card">
              <CardMedia
                className="project-image"
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions className="project-actions">
                <Button href={project.github} target="_blank" rel="noopener" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  GitHub
                </Button>
                <Button href={project.link} target="_blank" rel="noopener" endIcon={<CodeIcon />} sx={{ textTransform: 'none' }}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
