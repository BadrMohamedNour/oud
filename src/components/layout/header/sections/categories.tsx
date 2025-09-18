"use client";

import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { useParams } from "next/navigation";
import { Dropdown } from "antd";

export default function CategoriesMenu({ categories }) {
  const [parentCategories, setParentCategories] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useMemo(() => {
    const parentCategoriesItems = categories?.active_categories.map(
      (parentCat) => ({
        name: parentCat.name,
        path: `/categories/${parentCat.id}`,
        items: parentCat.children.map((item) => ({
          label: (
            <Link href={`/categories/${item.id}`}>
              <span onClick={() => {}}>{item.name}</span>
            </Link>
          ),
          key: item.id,
        })),
      })
    );

    setParentCategories(parentCategoriesItems);
  }, [categories, dispatch, params]);

  return (
    <div className="categories">
      {parentCategories.map(({ name, path, items }) => (
        <Dropdown
          className="dropdwonS1"
          rootClassName="headerCategories"
          key={name}
          menu={{ items }}
        >
          <Link href={path} className="flexCenter">
            <span>{name}</span>
            <GoChevronDown size={18} />
          </Link>
        </Dropdown>
      ))}
    </div>
  );
}
