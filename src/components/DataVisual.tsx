import { categories } from '../data/case-studies/youtube-data';
import { BrainCircuit } from 'lucide-react';
export function MiniBars() {
  return (
    <div className="mini-bars" aria-label="Top four categories by median views">
      <div className="mini-chart-title">
        Median views by category <span>ALL YEARS</span>
      </div>
      {categories['All years'].slice(0, 4).map((d, i) => (
        <div className="mini-bar-row" key={d.name}>
          <span>{['Liver', 'Kidney', 'Heart', 'Food'][i]}</span>
          <div>
            <i style={{ width: `${(d.views / 400000) * 100}%` }} />
          </div>
          <b>{Math.round(d.views / 1000)}K</b>
        </div>
      ))}
      <p>Accumulated views · category medians</p>
    </div>
  );
}
export default function DataVisual() {
  const layers = [
    { x: 65, nodes: [95, 165, 235] },
    { x: 165, nodes: [60, 130, 200, 270] },
    { x: 275, nodes: [60, 130, 200, 270] },
    { x: 375, nodes: [95, 165, 235] },
  ];

  return (
    <div className="ai-visual">
      <div className="ai-visual-heading">
        <BrainCircuit size={22} />
        <span>SOFTWARE · DATA · MACHINE LEARNING</span>
      </div>

      <h2>Connecting data. Discovering patterns.</h2>

      <div className="ai-network">
        <svg
          viewBox="0 0 440 330"
          aria-hidden="true"
        >
          {layers.slice(0, -1).map((layer, index) =>
            layer.nodes.flatMap((y, sourceIndex) =>
              layers[index + 1].nodes.map((nextY, targetIndex) => (
                <line
                  key={`${index}-${sourceIndex}-${targetIndex}`}
                  x1={layer.x}
                  y1={y}
                  x2={layers[index + 1].x}
                  y2={nextY}
                  stroke={index === 1 ? '#a78bfa' : '#28d5ed'}
                  strokeOpacity="0.22"
                  strokeWidth="1"
                />
              )),
            ),
          )}

          {layers.map((layer, layerIndex) =>
            layer.nodes.map((y, nodeIndex) => (
              <g key={`${layerIndex}-${nodeIndex}`}>
                <circle
                  cx={layer.x}
                  cy={y}
                  r="14"
                  fill={layerIndex % 2 ? '#a78bfa' : '#28d5ed'}
                  fillOpacity="0.1"
                />

                <circle
                  cx={layer.x}
                  cy={y}
                  r="5"
                  fill={layerIndex % 2 ? '#a78bfa' : '#28d5ed'}
                />
              </g>
            )),
          )}
        </svg>

        <div className="ai-core">
          <BrainCircuit size={48} strokeWidth={1.4} />
        </div>
      </div>

      <div className="ai-topics">
        <span>Data analysis</span>
        <span>Customer segmentation</span>
        <span>Model evaluation</span>
      </div>

      <p className="ai-visual-note">
        Applied K-Means · Continuing to learn model training and evaluation
      </p>

      <small>Conceptual AI illustration</small>
    </div>
  );
}
