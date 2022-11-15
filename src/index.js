import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

class Board extends React.Component {
    renderSquare(i){
        return <Square value={i} />;
    }
}