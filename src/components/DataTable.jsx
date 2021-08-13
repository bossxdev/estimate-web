import React, { Component } from 'react'
import Pagination from './pagination.jsx'

export default class DataTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currPage: 1,
    }
    this.displayData = this.displayData.bind(this)
    this.exportAdvancedResult = this.exportAdvancedResult.bind(this)
    this.onPageChanged = this.onPageChanged.bind(this)
  }

  exportAdvancedResult() {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data, csv, link
    let fileName
    let args = {
      data: this.props.obj,
    }
    data = args.data || null
    if (data == null || !data.length) {
      return null
    }

    columnDelimiter = args.columnDelimiter || ','
    lineDelimiter = args.lineDelimiter || '\n'

    keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    data.map((item) => {
      ctr = 0
      keys.map((key) => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]
        ctr++
      })
      result += lineDelimiter
    })

    if (result == null) return

    fileName = 'reports.csv'

    if (!result.match(/^data:text\/csv/i)) {
      result = 'data:text/csv;charset=utf-8,' + result
    }

    csv = encodeURI(result)
    link = document.createElement('a')
    link.setAttribute('href', csv)
    link.setAttribute('download', fileName)
    link.click()
  }

  displayData() {
    const { currPage } = this.state
    const indexOfLastResult = currPage * this.props.dataInOnePage
    const indexOfFirstResult = indexOfLastResult - this.props.dataInOnePage
    if (this.props.obj.length) {
      const currentResults = this.props.obj.slice(
        indexOfFirstResult,
        indexOfLastResult
      )
      let headings = Object.keys(this.props.obj[0])
      let data = currentResults.map((result, index) => {
        return (
          <tr key={index}>
            {headings.map((heading, ind) => {
              return <td key={ind}>{result[heading]}</td>
            })}
          </tr>
        )
      })
      return data
    }
  }

  onPageChanged(changedPage) {
    this.setState({
      currPage: changedPage,
    })
  }

  render() {
    let headings = Object.keys(this.props.obj[0])
    return (
      <div className="content custom-table-na-ka">
        <div className="horizontal-scroll">
          <table className="">
            <tbody className="our-table">
              <tr className="tr-head">
                {headings.map((key, index) => {
                  return <th key={index}>{key}</th>
                })}
              </tr>

              {this.displayData()}
            </tbody>
          </table>
        </div>
        {this.props.obj.length > this.props.dataInOnePage ? (
          <div>
            <Pagination
              onPageChanged={this.onPageChanged}
              presentPage={this.state.currPage}
              data={this.props.obj}
              dataInOnePage={this.props.dataInOnePage}
              pageNeighbours={1}
            />
          </div>
        ) : null}
      </div>
    )
  }
}
