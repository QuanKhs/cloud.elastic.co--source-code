/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import React, { forwardRef, Ref } from 'react'
import { connect, Connect } from 'react-redux'

export interface ForwardedRefProps {
  forwardedRef?: Ref<HTMLDivElement>
}

// @ts-ignore this is totally fine
const connectAndForwardRef: Connect =
  (mapStateToProps = null, mapDispatchToProps = null, mergeProps = null, options = {}) =>
  // @ts-ignore this is fine — assume we return what consumers expect
  (WrappedComponent) =>
    connect(mapStateToProps, mapDispatchToProps, mergeProps, {
      ...options,
      forwardRef: true,
    })(
      forwardRef<HTMLDivElement>((props, ref) => (
        <WrappedComponent {...props} forwardedRef={ref} />
      )),
    )

export default connectAndForwardRef
