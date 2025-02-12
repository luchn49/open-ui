/* eslint-disable */

import React from 'react'
import './breadcrumb-anatomy.css'

const BreadcrumbAnatomy = () => {
  return (
    <div className="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label htmlFor="show-slots"> Show slots</label>
      <div className="component-anatomy">
        <host name="breadcrumb" role="navigation">
          <slot name="breadcrumb-container">
            <part name="ol">
              <part name="li [part=item]" data-slot>
                item
              </part>
            </part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default BreadcrumbAnatomy
