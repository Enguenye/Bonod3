import React, { Component } from 'react';
import * as d3 from 'd3';
const cx = [0];
const cy = [0];
let cont = 1;
let elipses=[];
class Arbol extends Component {

    componentDidMount() {
        const data = []
        this.cargarArbol(data)
    }
    render() {
        return (
            <div>
                <form>
                    Valor
            <input id="textito" type="text" name="firstname" />
                    <button id="nuevo" type="button">Aceptar</button>
                </form>

                <div ref="canvas">
                </div>
            </div>
        );
    }
    cargarArbol(data) {
        const width = 10000;
        const height = 10000;

        const svg = d3.select(this.refs.canvas).append('svg');

        svg.attr("width", width);
        svg.attr("height", height);


        cx.push(500);
        cy.push(10);
        cont = cont + 1;
        d3.select("#nuevo").on("click", function () {
            let distx = 0;
            let disty = 0;
            console.log(cx);
            console.log(cy);
            if (cont % 2 === 0) {
                distx = cx[(cx.length) / 2];
                disty = cy[cy.length / 2];
                if (cont !== 2) {
                    svg.append("line")
                        .attr("x1", distx)
                        .attr("y1", disty)
                        .attr("x2", distx + 800/cont)
                        .attr("y2", disty + 50)
                        .attr("stroke-width", 2)
                        .attr("stroke", "black");
                }

                let elipse = svg.append("ellipse")
                    .style("fill", "red")
                    .attr("cx", 500)
                    .attr("cy", 10)
                    .attr("rx", 10)
                    .attr("ry", 10);
                cx.push(distx + 800/cont);
                cy.push(disty + 50);
                elipse.transition().style("fill", "#1C73E3")
                    .attr("cx", distx + 800/cont)
                    .attr("cy", disty + 50)
                    .attr("rx", 10)
                    .attr("ry", 10)
                    .attr("stroke", "black")
                    .ease(d3.easeElastic,1)
                    .duration(1000);
                    elipses.push(elipse);
                    svg.append("text").attr("dx",distx + 800/cont)
                .attr("dy",disty + 50).text(function(e){return document.getElementById("textito").value});
                            }
                
            else {
                distx = cx[(cx.length + 1) / 2];
                disty = cy[(cy.length + 1) / 2]
                svg.append("line")
                    .attr("x1", distx)
                    .attr("y1", disty)
                    .attr("x2", distx - 800/cont)
                    .attr("y2", disty + 50)
                    .attr("stroke-width", 2)
                    .attr("stroke", "black");
                let elipse = svg.append("ellipse")
                    .style("fill", "red")
                    .attr("cx", 500)
                    .attr("cy", 10)
                    .attr("rx", 10)
                    .attr("ry", 10);
                cx.push(distx - 800/cont);
                cy.push(disty + 50);
                elipse.transition().style("fill", "#1C73E3")
                    .attr("cx", distx - 800/cont)
                    .attr("cy", disty + 50)
                    .attr("rx", 10)
                    .attr("ry", 10)
                    .attr("stroke", "black")
                    .ease(d3.easeElastic,1)
                    .duration(1000);
                    elipses.push(elipse);
                    svg.append("text").attr("dx",distx - 800/cont)
                .attr("dy",disty + 50).text(function(e){return document.getElementById("textito").value});
            }
            cont = cont + 1;
        });

    }
}


export default Arbol;