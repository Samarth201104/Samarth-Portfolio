'use client';
import { useState } from 'react';
import { pipeline } from '@/data/profile';
import { Icon } from './ui';
export function Pipeline() {
 const [active,setActive]=useState(0);
 return <aside className="pipeline-card surface" aria-label="Illustrative AI engineering workflow"><header className="pipeline-header"><span className="icon-tile"><Icon name="network"/></span><div><h2>From input to impact.</h2><p>An AI engineering workflow</p></div></header><p className="pipeline-caption">Select a stage to explore the engineering behind it.</p><div className="pipeline-nodes" role="group" aria-label="Engineering stages">{pipeline.map((stage,i)=><button key={stage.title} title={stage.tech} aria-pressed={active===i} aria-controls="pipeline-detail" onClick={()=>setActive(i)} className={`pipeline-node ${active===i?'is-active':''}`}><Icon name={stage.icon}/><span>{stage.title}</span><small>{String(i+1).padStart(2,'0')}</small></button>)}</div><div id="pipeline-detail" className="pipeline-detail" aria-live="polite"><span className="eyebrow">{pipeline[active].title}</span><p>{pipeline[active].text}</p><span className="pipeline-tech">{pipeline[active].tech}</span></div><div className="pipeline-foot"><span className="status-dot"/>Illustrative workflow · no model is running</div></aside>;
}
