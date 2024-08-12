const ProjectComponent = () => (
  <iframe
    src="https://leandrocamilottioldportfolio.netlify.app/jogo%20da%20velha/index.html"
    style={{
      width: '100%',
      height: '100%',
      border: 'none',
   
    }}
    title="Tic Tac Toe"
  />
);

const projectComponents = {
  Kanban: () => import('../projects/Kanban/index'),
  ObjectDetectionApp: () => import('../projects/ObjectDetection/index'),
  TicTacToe: () => Promise.resolve({ default: ProjectComponent }),

  // Add other project mappings similarly
};

export default projectComponents;
