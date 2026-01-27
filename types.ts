
export interface AsteroidAnalysis {
  name: string;
  type: string;
  estimatedValue: string;
  composition: {
    material: string;
    percentage: number;
  }[];
  miningDifficulty: 'Low' | 'Medium' | 'High' | 'Extreme';
  description: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'future';
}
