/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import AgentView from "../../components/agentview/agentview";
import Button from "../../components/button/button";
import Fuse from 'fuse.js'
import "./agents.css";



export default function agents(props) {
  const Agents = [
    {
        id: "1",
        name: "aaron",
        surename: "nerostarx",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "2",
        name: "muhammed",
        surename: "klili",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "3",
        name: "amine",
        surename: "ferui",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "4",
        name: "lamine",
        surename: "slimani",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "5",
        name: "karim",
        surename: "boulahi",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "6",
        name: "mouh",
        surename: "cappuchinou",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
    {
        id: "7",
        name: "riad",
        surename: "flouzi",
        currentTask: "this is a task",
        taskDate: "20-20-2020"
    },
  ]

  
  const [query, setQuery] = useState('')

  const fusy = new Fuse(Agents, {keys: ['name']})

  const results = fusy.search(query)
  const agentList = query ? results.map(result => result.item): Agents

  function search({ currentTarget= {}}){
    const {value} = currentTarget;
    setQuery(value)
  }
  
  return (
    <div className="agent-list-container">
      <div className="header-actions">
        <input
          type="search"
          name="agnet-list-search"
          id="agent-list-search"
          placeholder="rechercher des agents"
          className="thex-agent-search"
          value={query}
          onChange={search}
        />
        <Button text="Ajouter agent" mode="light_mode" />
      </div>
      <div className="agent-header-container">
        <p className="header-title">informations d'agent</p>
        <p className="header-title">Tache courante</p>
      </div>
      
      {agentList.map(item => <AgentView key={item.id} agent={item}/>)}
    </div>
  );
}
