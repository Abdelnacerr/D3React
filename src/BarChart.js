import React, { useRef } from 'react'
import * as d3 from 'd3'

const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]
const svgWidth = 500,
	svgHeight = 300,
	barPadding = 5 //padding between bars
const barWidth = svgWidth / dataset.length //width of each bar

const BarChart = () => {
	const d3BarChart = useRef()

	//set up chart
	const svg = d3
		.select(d3BarChart.current)
		.attr('width', svgWidth)
		.attr('height', svgHeight)
		// .style('fill', 'yellow')

	svg
		.selectAll('rect')
		.data(dataset) //data in waiting state
		.enter() //enter readies data for operation
		.append('rect') //a rect appended for each data element
		.attr('y', function (d) {
			return svgHeight - d
		})
		.attr('height', function (d) {
			return d
		})
		.attr('width', barWidth - barPadding)
		.attr('transform', function (d, i) {
			const translate = [barWidth * i, 0]
			return 'translate(' + translate + ')'
		})
		.style('fill', 'skyblue')

	svg
		.selectAll('text')
		.data(dataset) //data in waiting state
		.enter()
		.append('text') //takes a string or a function as a param
		.text(function (d) {
			return d
		})
		.attr('y', function (d) {
			return svgHeight - d - 2 //subtract extra 2 pixels
		})
		.attr('x', function (d, i) {
			return barWidth * i
		})
		.style('fill', 'red')

	return (
		<div>
			<svg ref={d3BarChart}></svg>
		</div>
	)
}

export default BarChart
