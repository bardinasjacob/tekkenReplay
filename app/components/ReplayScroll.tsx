import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import useSWR, { Fetcher } from "swr";

function ReplayScroll(props: { charArray: string[] }) {
  const [videoPlayerLink, setLink] = useState("");
  console.log(videoPlayerLink);
  let vidLink = "";

  //Changing youtube link to embed link
  function handleSelect(link: String) {
    let usableLink = link.replace("watch?v=", "embed/").split("&pp")[0];
    setLink(usableLink);
  }

  //Changing length of query string depending if any is selected
  if (props.charArray[0] != undefined && props.charArray[1] == undefined) {
    var queryString = "?p1Char=" + props.charArray[0];
  } else if (
    props.charArray[0] == undefined &&
    props.charArray[1] != undefined
  ) {
    var queryString = "?p1Char=" + props.charArray[1];
  } else {
    var queryString =
      "?p1Char=" + props.charArray[0] + "&p2Char=" + props.charArray[1];
  }

  function fetcher(url: string) {
    return fetch("../api" + queryString).then((res) => res.json());
  }

  const { data } = useSWR("../api" + queryString, fetcher);

  //Using a dummy ID for the table to refrence in case the server call fails
  var matches = [{ _id: -1 }];

  try {
    matches = data.matches;
  } catch (error) {}

  const columns = [
    { field: "p1Name", headerName: "Player 1 Name", width: 200 },
    { field: "p1Char", headerName: "Player 1 Char", width: 200 },
    { field: "p2Name", headerName: "Player 2 Name", width: 200 },
    { field: "p2Char", headerName: "Player 2 Char", width: 200 },
    { field: "winner", headerName: "Winner", width: 200 },
    {
      field: "youtubeLink",
      headerName: "Video Link",
      width: 600,
      renderCell: (params: GridRenderCellParams<any, String>) => (
        <Link href={`${params.value}`}>{`${params.value}`}</Link>
      ),
    },
  ];

  function getRowId(matches: any) {
    return matches._id;
  }

  return (
    <>
        <div className="flex w-full">
          <p className=" bg-white h-80" style={{}}>
            <DataGrid
              getRowId={getRowId}
              rows={matches}
              columns={columns}
              onRowClick={(selected) => {
                handleSelect(selected.row.youtubeLink);
              }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              className=" text-xl"
            />
          </p>
          <iframe className=" w-1/3" src={videoPlayerLink} allowFullScreen/>
        </div>
    </>
  );
}

const MemoizedReplay = React.memo(ReplayScroll);

export default MemoizedReplay;
