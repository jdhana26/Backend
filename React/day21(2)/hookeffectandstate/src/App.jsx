 import LoadOnMount from "./components/LoadOnMount";
import FetchOnClick from "./components/FetchOnClick";
import ShowHide from "./components/ShowHide";
import FirstFive from "./components/FirstFive";
import ReverseList from "./components/ReverseList";
import RemoveById from "./components/RemoveById";
import SearchFilter from "./components/SearchFilter";
import CountAfterLoad from "./components/CountAfterLoad";
import SortByName from "./components/SortByName";
import NoData from "./components/NoData";

const App = () => {
  return (
    <div className="p-6 space-y-4">
      <LoadOnMount />
      <FetchOnClick />
      <ShowHide />
      <FirstFive />
      <ReverseList />
      <RemoveById />
      <SearchFilter />
      <CountAfterLoad />
      <SortByName />
      <NoData />
    </div>
  );
};

export default App;
