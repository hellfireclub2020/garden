/*
 * Copyright (C) 2018 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React from "react"

import Overview from "../components/overview"
import FetchContainer from "./fetch-container"
// tslint:disable-next-line:no-unused (https://github.com/palantir/tslint/issues/4022)
import { FetchStatusResponse, fetchStatus } from "../api"
import PageError from "../components/page-error"

export default () => (
  <FetchContainer<FetchStatusResponse> ErrorComponent={PageError} fetchFn={fetchStatus}>
    {({ data: status }) => {
      return <Overview status={status} />
    }}
  </FetchContainer>
)