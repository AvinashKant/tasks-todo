import Breadcrumb from '../../ui-library/Breadcrumb';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Home01Icon } from '@hugeicons/core-free-icons';
import { NavLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import VerticalDivider from '../../components/Divider/VerticialDivider'; // Corrected typo in file name
import { Button } from '../../ui-library/avinash-react-component-library';
import Badge from '../../ui-library/Badge';
import {Panel} from '../../ui-library/avinash-react-component-library';
import { useState } from 'react';
const Links = [
  {
    title: 'Issues',
    href: '/',
  },
];

const options = [
  {
    title: 'asd1',
    value: 'asd',
  },
];

export default function Issues() {
  const [searchParams] = useSearchParams();
  const currentState = searchParams.get("state");

  const [isCreatePanelOpen, setIsCreatePanelOpen] = useState(false);

  return (
    <>
      <Breadcrumb links={Links} />

      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white">
        
        {/* Tabs */}
        <div className="flex gap-6">
          <NavLink
            to="/issues"
            className={`pb-2 text-sm font-medium ${
              !currentState
                ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Open <Badge count={0} />
          </NavLink>

          <NavLink
            to="/issues?state=closed"
            className={`pb-2 text-sm font-medium ${
              currentState === "closed"
              ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
            
          >
            Closed<Badge count={0} />
          </NavLink>

          <NavLink
            to="/issues?state=all"
            className={`pb-2 text-sm font-medium ${
              currentState === "all"
                ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            All<Badge count={0} />
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button title="Bulk edit"  />
          <Button title="New item" variant="blue" className="text-sm" onClick={()=>setIsCreatePanelOpen(true)} />
        </div>
      </div>

      {/* ---------- EMPTY STATE ---------- */}
      <div className="flex flex-col justify-center items-center mt-16 px-6">
        
        <HugeiconsIcon icon={Home01Icon} size={28} strokeWidth={1.5} />

        <h1 className="text-3xl font-semibold text-center mt-4">
          Track bugs, plan features, and organize your work with issues
        </h1>

        <p className="text-gray-600 text-center mt-2 max-w-xl">
          Use issues to collaborate on ideas, solve problems, and plan your project.
        </p>

        <div className="mt-5">
          <Button title="New item" variant="blue" />
        </div>
      </div>

      {/* ---------- INFO BAR ---------- */}
      <div className="mt-10 border-t py-4 px-6 flex justify-between text-sm text-gray-600">
        <div>
          Using Jira for issue tracking?
          <a className="text-blue-600 ml-1 hover:underline" href="">
            See integration options
          </a>
        </div>

        <a className="text-blue-600 hover:underline" href="">
          Learn more
        </a>
      </div>

{isCreatePanelOpen && (<Panel heading="New Issue" subHeading="Create a new issue">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </Panel>
  )}
    </>
  );
}
