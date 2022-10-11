import Link from "next/link";
import React, { useState } from "react";
import {} from 'next-auth/react'

export default class LeaderboardRow extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        rank: "",
        easy: "",
        med: "",
        hard: "",
        points: ""
      }
    }
  
    updateName(event) {
      this.setState({
        name: event.target.value 
      });
    }
  
    updateRank(event) {
      this.setState({
        rank: event.target.value 
      });
    }

    updateEasy(event) {
        this.setState({
          name: event.target.value 
        });
      }

      updateMed(event) {
        this.setState({
          med: event.target.value 
        });
      }

      updateHard(event) {
        this.setState({
          hard: event.target.value 
        });
      }

      updatePoints(event) {
        this.setState({
          points: event.target.value 
        });
      }

    render() {
  
  return (
    <div>
      <table>
        <tr>
          <td>{this.state.name}</td>
          <td>{this.state.easy}</td>
          <td>{this.state.med}</td>
          <td>{this.state.hard}</td>
          <td>{this.state.points}</td>
        </tr>
      </table>
    </div>
  );
};

}